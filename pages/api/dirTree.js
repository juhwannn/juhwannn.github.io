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

export default function DirectoryStructure(dir, folderStructure, prevFolder = "posts") {
    fs.readdirSync(dir).map((v,i) => {
        const tempDir = path.join(dir, v);

        folderStructure[prevFolder] === undefined ? folderStructure[prevFolder] = {} : null;

        if (isDirectory(tempDir)) {
            folderStructure[prevFolder][v] = {};
            DirectoryStructure(tempDir, folderStructure[prevFolder], v);
        } else {
            pushFiles(folderStructure[prevFolder], v);
        }

    });

    return folderStructure;
};
