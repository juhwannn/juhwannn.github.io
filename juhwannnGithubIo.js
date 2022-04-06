console.log(`${__filename}:1`);
require('dotenv').config();
const os = require('os');

const version = process.version;
const versionRequired = 'v16.5.0'; // TODO 'v14.16.1';
const NODE_ENV = process.env.NODE_ENV;
//const port = parseInt(process.env.PORT, 10) || 21030;
const port = 3000;
const dev = NODE_ENV !== 'staging' && NODE_ENV !== 'production';

const nextJsEnabled = true;
const swaggerEnabled = dev;
const environment = {
    version,
    versionRequired,
    NODE_ENV,
    port,
    dev,
    nextJsEnabled,
    swaggerEnabled,
};

console.info(`
\n\n\n\n\n
==============================================================================
 Starting...
------------------------------------------------------------------------------
${JSON.stringify(environment, null, 4)}
==============================================================================

`);

const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectMultiparty = require('connect-multiparty');

const Next = require('next');
const RouterUtil = require("./serverSides/utils/RouterUtil");
const SignedCookieLogic = require("./serverSides/logics/SignedCookieLogic");
const cookieParser = require("cookie-parser");
const cron = require("node-cron");
const nextJs = Next({dev});
const nextJsRequestHandler = nextJs.getRequestHandler();


(async () => {
    try {
        ['./temp', './temp/upload'].forEach(v => {
            if (!fs.existsSync(v)) {
                fs.mkdirSync(v);
            }
        });

        if (nextJsEnabled) await nextJs.prepare();
        const expressServer = express();

        expressServer.set('trust proxy', true);

        expressServer.use(morgan(':date[iso] :remote-addr :method :url', {immediate: true}));
        expressServer.use(morgan(':date[iso] :remote-addr :method :url :status :res[content-length] :response-time ms'));
        expressServer.use(connectMultiparty({uploadDir: 'temp/upload'}));
        expressServer.use(bodyParser.json());
        expressServer.use(bodyParser.urlencoded({extended: false}));

        expressServer.use(cookieParser(process.env.COOKIEPARSER_KEY));
        expressServer.use(RouterUtil.extendReqRes);
        expressServer.use(SignedCookieLogic.extendReqRes);


        expressServer.use('/api', require('./serverSides/routes/api'));

        if (nextJsEnabled) expressServer.get('*', (req, res) => {
            return nextJsRequestHandler(req, res);
        });

        expressServer.listen(port, (err) => {
            if (err)
                throw err;

            console.info(`http://localhost:${port}`);
        });

        cron.schedule('* * * * *', async () => {
            console.log('cron - every minute');

        });

    } catch (ex) {
        console.error(ex.stack);
        process.exit(1);
    }
})();
