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

    if (!fs.statSync(filePath)) {
        return;
    }
    const fileStats = fs.statSync(filePath);

    const offset = new Date().getTimezoneOffset() * 60000;
    const createDate = new Date(fileStats.birthtime - (offset)).toISOString().replace(/T/, ' ').split(" ");
    const modifyDate = new Date(fileStats.mtime - (offset)).toISOString().replace(/T/, ' ').split(" ");

    return {
        fileContents,
        createDate: createDate[0],
        modifyDate: modifyDate[0]
    };
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

    const {frontContent, createDate, modifyDate, frontMatter} = getContent(params);
    const markdownContent = await markdownToHtml(frontContent);

    res.status(200).json({
        markdownContent,
        createDate,
        modifyDate,
        frontMatter
    });
}
