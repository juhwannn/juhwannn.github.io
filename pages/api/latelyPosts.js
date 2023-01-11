import React, {useEffect} from "react";
import fs from 'fs'
import path from 'path'
import matter from "gray-matter";

const isDirectory = (dir) => {
    if (fs.lstatSync(dir).isDirectory()) {
        return true;
    }

    return false;
};

const getLatelyPosts = (tagParam, files = [], dir = process.cwd() + '/posts') => {
    fs.readdirSync(dir).map((v, i) => {
        const tempDir = path.join(dir, v);

        if (isDirectory(tempDir)) {
            getLatelyPosts(tagParam, files, tempDir);
        } else {
            const fileStats = fs.statSync(tempDir);
            const frontMatter = matter(fs.readFileSync(tempDir, 'utf8')).data;

            // TODO: refactoring
            if (tagParam && frontMatter.tags.includes(tagParam)) {
                if (files[files.length] === undefined) {
                    files[files.length] = {};
                }

                const offset = new Date().getTimezoneOffset() * 60000;
                const createDate = new Date(fileStats.birthtime - (offset)).toISOString().replace(/T/, ' ').split(" ");
                const modifyDate = new Date(fileStats.mtime - (offset)).toISOString().replace(/T/, ' ').split(" ");

                files[files.length - 1].fileName = v.split(".md")[0].replace(/\_/g,' ');
                files[files.length - 1].createDate = createDate[0];
                files[files.length - 1].modifyDate = modifyDate[0];
                files[files.length - 1].matters = frontMatter;
                files[files.length - 1].filePath = tempDir;
            }

            if (!tagParam) {
                if (files[files.length] === undefined) {
                    files[files.length] = {};
                }

                const offset = new Date().getTimezoneOffset() * 60000;
                const createDate = new Date(fileStats.birthtime - (offset)).toISOString().replace(/T/, ' ').split(" ");
                const modifyDate = new Date(fileStats.mtime - (offset)).toISOString().replace(/T/, ' ').split(" ");

                files[files.length - 1].fileName = v.split(".md")[0].replace(/\_/g,' ');
                files[files.length - 1].createDate = createDate[0];
                files[files.length - 1].modifyDate = modifyDate[0];
                files[files.length - 1].matters = frontMatter;
                files[files.length - 1].filePath = tempDir;
            }
        }
    });

    files.sort((a, b) => {
        return new Date(b.createDate) - new Date(a.createDate);
    });

    return {
        files
    };
};

export default async function handler(req, res) {
    const tagParam = Object.keys(req.query);
    const latelyPosts = getLatelyPosts(tagParam[0]);

    res.status(200).json({
        latelyPosts,
    });
}
