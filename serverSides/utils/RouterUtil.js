console.log(`${__filename}:1`);

module.exports = {
    extendReqRes: (req, res, next) => {
        req.get = key => {
            if (key in req.files) return req.files[key] === '' ? null : req.files[key];
            if (key in req.body) return req.body[key] === '' ? null : req.body[key];
            if (key in req.query) return req.query[key] === '' ? null : req.query[key];
            if (key in req.params) return req.params[key] === '' ? null : req.params[key];
            return undefined;
        };
        req.getRequired = key => {
            const val = req.get(key);
            if (val === undefined || val === null)
                throw new Error(`!${key}`);

            return val;
        };

        // client-side로부터 필수로 넘겨받아할 파라미터들을 읽을 때 사용. (없을 경우 Error발생 시키기 위함)
        req.getObjectRequired = (...arg) => arg.reduce((a, v) => ({...a, [v]: req.getRequired(v)}), {});
        // client-side로부터 넘어온 파라미터 받아내는 일반적인 경우에 사용.
        req.getObject = (...arg) => arg.reduce((a, v) => ({...a, [v]: req.get(v)}), {});

        req.getFileRequired = key => {
            const val = req.files[key];
            if (!val)
                throw new Error(`!${key}`);

            if (!val.size)
                throw new Error(`!${key}.size`);

            return val;
        };

        req.referer = () => req.header('referer');
        req.rootUrl = () => `${req.protocol}://${req.header('host')}`;
        req.fullUrl = () => `${req.protocol}://${req.header('host')}${req.originalUrl}`;

        res.cookieSetSigned = (k, v) => {
            if (req.protocol === 'https')
                res.cookie(k, v, {signed: true, httpOnly: true, sameSite: 'strict', secure: true});
            else
                res.cookie(k, v, {signed: true, httpOnly: true, sameSite: 'strict'});
        };

        res.cookieSetSignedSecure = (k, v) => {
            res.cookie(k, v, {signed: true, httpOnly: true, sameSite: 'strict', secure: true});
        };

        res.cookieRemove = k => res.cookie(k, '', {expires: new Date(0)});

        res.renderHtml = h => res.set('Content-Type', 'text/html').send(h);

        res.renderText = t => res.set('Content-Type', 'text/plain').send(t);
        res.renderText403 = t => res.set('Content-Type', 'text/plain').status(403).send(t);

        res.renderJson = o => res.set('Content-Type', 'text/json').json(o);                 // 200 OK
        res.renderJson400 = o => res.set('Content-Type', 'text/json').status(400).json(o);  // 400 Bad Request
        res.renderJson401 = o => res.set('Content-Type', 'text/json').status(401).json(o);  // 401 Unauthorized
        res.renderJson403 = o => res.set('Content-Type', 'text/json').status(403).json(o);  // 403 Forbidden
        res.renderJson404 = o => res.set('Content-Type', 'text/json').status(404).json(o);  // 404 Not Found
        res.renderJson409 = o => res.set('Content-Type', 'text/json').status(409).json(o);  // 409 Conflict
        res.renderJson416 = o => res.set('Content-Type', 'text/json').status(416).json(o);  // 416 Requested Range Not Satisfiable
        res.renderJson500 = o => res.set('Content-Type', 'text/json').status(500).json(o);  // 500 Internal Server Error
        res.renderJson501 = o => res.set('Content-Type', 'text/json').status(501).json(o);  // 501 Not Implemented

        res.renderFileXlsx = (filePath, fileName, onDone) => {
            res.download(filePath, fileName, {
                headers: {
                    'Content-Disposition': 'attachment; filename=' + '"' + fileName + '"',
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                },
            }, onDone);
        };

        next();
    },

    wrapTryCatch: (f) => {
        return async (req, res, next) => {
            try {
                await f(req, res, next);
            } catch (err) {
                console.error(err);
                next(err);
            }
        };
    },
};
