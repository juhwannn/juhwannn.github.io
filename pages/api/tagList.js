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

const getTagList = (files = {}, dir = process.cwd() + '/posts') => {
    fs.readdirSync(dir).map((v, i) => {
        const tempDir = path.join(dir, v);

        if (isDirectory(tempDir)) {
            getTagList(files, tempDir);
        } else {
            // TODO: 해당 방법은 posts 디렉토리 아래에 있는 모든 .md 파일을 불러오기 때문에 포스트 양이 늘어날수록 오래걸려서 안좋은 방법인것 같다.
            // TODO: 새로운 포스트가 업로드 되면 태그 목록만 따로 업데이트 시키는 작업이 필요할 것 같다. (메뉴 리스트에도 같은 작업 필수)
            const fileContent = fs.readFileSync(tempDir, 'utf8');
            const frontMatter = matter(fileContent).data;

            frontMatter?.tags?.map(v => {
                if (files[v] === undefined) {
                    files[v] = 1;
                } else {
                    files[v]++;
                }
            });
        }
    });

    return files;
};

export default function handler(req, res) {
    const tagList = getTagList();

    res.status(200).json({
        tagList
    });
}
