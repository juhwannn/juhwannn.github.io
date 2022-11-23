import fs from 'fs'
import path from 'path'

const isDirectory = (dir) => {
    if (fs.lstatSync(dir).isDirectory()) {
        return true;
    }

    return false;
}

const test = (postsDirectory, folderStructure) => {

    fs.readdirSync(postsDirectory).map((v,i) => {
        const test1 = path.join(postsDirectory, v);

        if (isDirectory(test1)) {
            folderStructure["posts"][v] = {};

            fs.readdirSync(test1).map((value, index) => {
                const test2 = path.join(test1, value);

                if (isDirectory(test2)) {
                    folderStructure["posts"][v][value] = {};

                    fs.readdirSync(test2).map((v2, i2) => {
                        const test3 = path.join(test2, v2);

                        if (isDirectory(test3)) {
                            folderStructure["posts"][v][value][v2] = {};
                        } else {
                            folderStructure["posts"][v][value][i2] = v2;
                        }
                    });

                } else {
                    folderStructure["posts"][v][index] = value;
                }

            });
        } else {
            folderStructure["posts"][v] = v;
        }

    });
}

export default function handler(req, res) {
    // 초기 디렉토리
    const postsDirectory = path.join(process.cwd(), '/posts');
    const folderStructure = {"posts": {}};
    test(postsDirectory, folderStructure);
    console.log(JSON.stringify(folderStructure));
    console.log(folderStructure);

    res.status(200).json({
        result: folderStructure
    });
};
