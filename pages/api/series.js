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

export default function getSeries(files = {}, dir = process.cwd() + '/posts') {
    fs.readdirSync(dir).map((v, i) => {
        const tempDir = path.join(dir, v);

        if (isDirectory(tempDir)) {
            getSeries(files, tempDir);
        } else {
            // TODO: 해당 방법은 posts 디렉토리 아래에 있는 모든 .md 파일을 불러오기 때문에 포스트 양이 늘어날수록 오래걸려서 안좋은 방법인것 같다.
            // TODO: 새로운 포스트가 업로드 되면 태그 목록만 따로 업데이트 시키는 작업이 필요할 것 같다. (메뉴 리스트에도 같은 작업 필수)
            const fileContent = fs.readFileSync(tempDir, 'utf8');
            const frontMatter = matter(fileContent).data;
            const fileStats = fs.statSync(tempDir);

            const offset = new Date().getTimezoneOffset() * 60000;
            const createDate = new Date(fileStats.birthtime - (offset)).toISOString().replace(/T/, ' ').split(" ")[0];
            const modifyDate = new Date(fileStats.mtime - (offset)).toISOString().replace(/T/, ' ').split(" ")[0];

            // TODO: 지저분해서 로직 수정해야할듯
            if (files[frontMatter?.series] === undefined) {
                files[frontMatter?.series] = {
                    count: 1,
                    file: [{
                        name: v?.split(".md")[0].replace(/\_/g,' '),
                        path: tempDir,
                        createDate,
                        modifyDate,
                        thumb: frontMatter?.thumb,
                        summary: frontMatter?.summary
                    }]
                }
            } else {
                files[frontMatter?.series].count++;
                files[frontMatter?.series].file.push({
                    name: v.split(".md")[0].replace(/\_/g,' '),
                    path: tempDir,
                    createDate,
                    modifyDate,
                    thumb: frontMatter?.thumb,
                    summary: frontMatter?.summary
                });
            }
        }
    });

    return {files};
};
