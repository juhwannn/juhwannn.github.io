import fs from "fs";
import {marked} from "marked";
import React, {useEffect} from "react";
import Prism from "prismjs";

const getContent = (params) => {
    let filePath = process.cwd() + '/posts';
    const paramKeys = Object.keys(params);

    paramKeys.map(v => {
        filePath += "/" + params[v];
    });

    const fileContents = fs.lstatSync(filePath).isDirectory() ? "" : fs.readFileSync(filePath, 'utf8');

    return fileContents;
};

const markdownToHtml = async (fileContent) => {
    const renderer = new marked.Renderer();
    // TODO: renderer.image 추가
    renderer.code = function(code, language, escaped) {
        code = this.options.highlight(code, language);
        if (!language) {
            return `<pre><code>${code}</code></pre>`;
        }

        const languageClass = "language-" + language;
        return `<pre class="${languageClass}"><code class="${languageClass}">${code}</code></pre>`;
    };

    marked.setOptions({
        renderer,
        highlight: function(code, language) {
            try {
                return Prism.highlight(code, Prism.languages[language], language);
            } catch {
                return code;
            }
        }
    });

    return marked(fileContent);
};

export default async function handler(req, res) {
    const params = req.query;

    const fileContent = getContent(params);
    const markdownContent = await markdownToHtml(fileContent);

    res.status(200).json({
        result: markdownContent
    });
}
