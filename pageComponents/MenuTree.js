import React, {useState} from "react";
import styled from "styled-components";
import FolderIcon from "../public/images/icons/folderIcon.svg";
import FileIcon from "../public/images/icons/fileIcon.svg";
import {useRouter} from "next/router";
import Link from "next/link";

const Root = styled.div`
    border: 1px solid black;
    font-size: 12px;
    border-radius: 10px;

`;

const MenuTreeDir = styled.div`
    ${props => props.menuDepth && {paddingLeft: props.menuDepth * 5}};
    ${props => props.menuDepth > 1 ? {borderLeft: "1px dashed black"} : null};
    margin-left: 10px;
`;

const MenuTreeFiles = styled.div`
    ${props => props.menuDepth && {paddingLeft: props.menuDepth * 5}};
    border-left: 1px dashed black;
    margin-left: 10px;
`;

const menuList = {
    posts: "DEVLOG",
    back: "Backend",
    front: "Frontend",
    devops: "Devops",
    express: "Express.js",
    node: "Node.js",
    aws: "AWS",
    docker: "Docker",
    next: "Next.js",
    react: "React",
};

const onClickDir = (menuVisible, setMenuVisible) => {

    if (!menuVisible) {
        return;
    }
    setMenuVisible(!menuVisible);
}

const menuNameConverter = f => menuList[f] ?? f;

const fileNameConverter = (file) => {
    const fileSubject = file.split(".md")[0].replace(/\_/g,' ');

    return fileSubject;
};

const onClickFile = (router, absFilePath, file, v) => {
    const filePath = "/" + findPath(absFilePath, "files", v) + "/" + file;

    return filePath;
};

const findPath = (ob, key, value) => {
    const path = [];
    const keyExists = (obj) => {
        if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {

            return false;
        } else if (obj.hasOwnProperty(key) && obj[key] === value) {

            return true;
        } else if (Array.isArray(obj)) {
            let parentKey = path.length ? path.pop() : "";

            for (let i = 0; i < obj.length; i++) {
                path.push(`${parentKey}[${i}]`);

                const result = keyExists(obj[i], key);
                if (result) {
                    return result;
                }

                path.pop();
            }
        } else {
            for (const k in obj) {
                path.push(k);

                const result = keyExists(obj[k], key);
                if (result) {
                    return result;
                }

                path.pop();
            }
        }

        return false;
    };

    keyExists(ob);

    return path.join("/");
}

const getMenuTree = (value, menuDepth = 0, router, absFilePath = value) => {
    menuDepth++;

    if (!value) {
        return;
    }

    let keyArr = getKeyArr(value);
    if (keyArr.length === 0) {
        return;
    }

    return (
        <div>
            {
                keyArr.map((v, i) => {
                    if (v !== "files") {
                        if (Object.keys(value[v]).length >= 1) {
                            return (
                                <MenuTreeDir menuDepth={menuDepth} key={i}>
                                    {menuNameConverter(v)}
                                    {getMenuTree(value[v], menuDepth, router, absFilePath)}
                                </MenuTreeDir>
                            );
                        }
                        return (
                            <MenuTreeDir key={i} menuDepth={menuDepth}>
                                {menuNameConverter(v)}
                                <MenuTreeDir>파일이 없습니다.</MenuTreeDir>
                            </MenuTreeDir>
                        );
                    } else {
                        return value[v].map((file, index) => (
                            <Link
                                passHref
                                key={index}
                                href={{
                                    pathname: onClickFile(router, absFilePath, file, value[v]),
                                }}
                            >
                                <MenuTreeFiles key={index} menuDepth={menuDepth}>
                                    {fileNameConverter(file)}
                                </MenuTreeFiles>
                            </Link>
                            )
                        );
                    }
                })
            }
        </div>
    );
};

const getKeyArr = (value) => {
    if (!value) {
        return;
    }

    let keyArr = [];

    for (let objKey in value) {
        keyArr.push(objKey);
    }

    return keyArr;
};

const MenuTree = ({
    value
}) => {
    const router = useRouter();

    if(!value) {
        return;
    }

    return (
        <Root>
            <div className="menuTree">
                {
                    getMenuTree(value, 0, router)
                }
            </div>
        </Root>
    );
};

export default MenuTree;
