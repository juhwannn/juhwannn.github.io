import React from "react";
import styled from "styled-components";
import FolderIcon from "../public/images/icons/folderIcon.svg";
import FileIcon from "../public/images/icons/fileIcon.svg";

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

const onClickDir = (e) => {

}

const menuNameConverter = f => menuList[f] ?? f;

const fileNameConverter = (file) => {
    const fileSubject = file.split(".md")[0].replace(/\_/g,' ');


    return fileSubject;
}

const getMenuTree = (value, menuDepth = 0) => {
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
                                    <div key={i}>
                                        <FolderIcon style={{width: "23px", height: "23px", marginRight: "5px"}}/>{menuNameConverter(v)}
                                    </div>
                                    {getMenuTree(value[v], menuDepth)}
                                </MenuTreeDir>
                            );
                        }

                        return (
                            <MenuTreeDir key={i} menuDepth={menuDepth}>
                                <FolderIcon style={{width: "23px", height: "23px", marginRight: "5px"}}/>{menuNameConverter(v)}
                                <div>파일이 없습니다.</div>
                            </MenuTreeDir>
                        );
                    } else {
                        return value[v].map((file, index) => (
                                <MenuTreeFiles key={index} menuDepth={menuDepth}>
                                    <FileIcon style={{width: "23px", height: "23px", marginRight: "5px"}}/>{fileNameConverter(file)}
                                </MenuTreeFiles>
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
    if(!value) {
        return;
    }

    return (
        <Root>
            <div className="menuTree">
                {
                    getMenuTree(value, 0)
                }
            </div>
        </Root>
    );
};

export default MenuTree;
