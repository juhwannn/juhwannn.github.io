import fs from 'fs'
import path from 'path'

const isDirectory = (dir) => {
    if (fs.lstatSync(dir).isDirectory()) {
        return true;
    }

    return false;
};

const pushFiles = (dir, file) => {
    dir["files"] === undefined ?  dir["files"] = [] : null;
    dir["files"].push(file);
};

const getDirectoryStructure = (dir, folderStructure, prevFolder = "posts") => {
    fs.readdirSync(dir).map((v,i) => {
        const tempDir = path.join(dir, v);

        folderStructure[prevFolder] === undefined ? folderStructure[prevFolder] = {} : null;

        if (isDirectory(tempDir)) {
            folderStructure[prevFolder][v] = {};
            getDirectoryStructure(tempDir, folderStructure[prevFolder], v);
        } else {
            pushFiles(folderStructure[prevFolder], v);
        }

    });
}

export default function handler(req, res) {
    const postsDirectory = path.join(process.cwd(), '/posts');
    const folderStructure = {"posts": {}};

    getDirectoryStructure(postsDirectory, folderStructure);

    res.status(200).json({
        result: folderStructure
    });
};
