import React, {useEffect} from "react";
import fs from 'fs'
import path from 'path'

const isDirectory = (dir) => {
    if (fs.lstatSync(dir).isDirectory()) {
        return true;
    }

    return false;
};

const getLatelyPosts = (files = [], dir = process.cwd() + '/posts') => {
    fs.readdirSync(dir).map((v, i) => {
        const tempDir = path.join(dir, v);

        if (isDirectory(tempDir)) {
            getLatelyPosts(files, tempDir);
        } else {
            const fileStats = fs.statSync(tempDir);

            if (files[files.length] === undefined) {
                files[files.length] = {};
            }

            const offset = new Date().getTimezoneOffset() * 60000;
            const createDate = new Date(fileStats.birthtime - (offset)).toISOString().replace(/T/, ' ').split(" ");
            const modifyDate = new Date(fileStats.mtime - (offset)).toISOString().replace(/T/, ' ').split(" ");

            files[files.length - 1].fileName = v.split(".md")[0].replace(/\_/g,' ');
            files[files.length - 1].createDate = createDate[0];
            files[files.length - 1].modifyDate = modifyDate[0];
        }
    });

    files.sort((a, b) => {
        return new Date(b.modifyDate) - new Date(a.modifyDate);
    });

    return {
        files
    };
};

export default async function handler(req, res) {
    const latelyPosts = getLatelyPosts();

    res.status(200).json({
        latelyPosts,
    });
}
