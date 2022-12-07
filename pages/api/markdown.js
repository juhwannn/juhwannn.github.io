import fs from "fs";
import {marked} from "marked";
import React, {useEffect} from "react";
import Prism from "prismjs";

const getContent = () => {
    const filePath = process.cwd() + '/posts/front/react/React_Hook_이란?.md';
    const fileContents = fs.readFileSync(filePath, 'utf8');

    return fileContents;
};

const markdownToHtml = async (fileContent) => {
    const renderer = new marked.Renderer();
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
    const fileContent = getContent();
    const test = await markdownToHtml(fileContent);
    res.status(200).json({
        result: test
    });
}
