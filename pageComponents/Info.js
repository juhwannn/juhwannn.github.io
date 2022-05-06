import styled from "styled-components";
import React from "react";
import {BiRocket} from "react-icons/Bi";
import {SiNextdotjs, SiExpress, SiJavascript, SiJenkins, SiMariadb, SiMysql, SiSequelize, SiSubversion,} from "react-icons/Si";
import {SiReact} from "react-icons/Si";
import {DiCss3, DiUbuntu} from "react-icons/Di";
import {AiFillGithub} from "react-icons/Ai";
import {FaAws, FaDocker, FaNode, FaWindows} from "react-icons/Fa";
import {TiHtml5} from "react-icons/Ti";
import {GrCentos, GrOracle} from "react-icons/Gr";
import {Tag} from "./elements/Tag";
import {BsKeyboard} from "react-icons/Bs";

const Root = styled.div`
    overflow: hidden;
    
    >hr {
        width: 30vw;
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
`;

const Header1 = styled.h1`
    text-align: left;
    margin-left: 10vw;
`;

const Header2 = styled.h2`

`;

const Header3 = styled.h3`

`;

const Info =
({
    visible,
    setVisible
}) => {

    return (
        <Root style={{display: visible ? "block" : "none"}}>
            <div>
                <Header1>
                    <BiRocket/>
                    소개글
                </Header1>
            </div>

            <hr/>

            <div>
                <Header1>
                    <BsKeyboard/>
                    기술 스택
                </Header1>

                <div>
                    <Header2>
                        FrontEnd
                    </Header2>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <SiNextdotjs color={"black"}/>Next.js
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <SiReact color={"blue"}/>React.js
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <SiJavascript color={"black"}/>Javascript
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <TiHtml5 color={"black"}/>HTML
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <DiCss3 color={"black"}/>CSS
                    </Tag>
                </div>

                <div>
                    <Header2>
                        BackEnd
                    </Header2>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <FaNode color={"black"}/>Node.js
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <SiExpress color={"black"}/>Express.js
                    </Tag>
                </div>

                <div>
                    <Header2>
                        CI/CD
                    </Header2>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <SiJenkins color={"black"}/>Jenkins
                    </Tag>
                </div>

                <div>
                    <Header2>
                        VCS
                    </Header2>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <AiFillGithub color={"black"}/>GitHub
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <SiSubversion color={"black"}/>SVN
                    </Tag>

                </div>

                <div>
                    <Header2>
                        Database
                    </Header2>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <SiMysql color={"black"}/>Mysql
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <SiMariadb color={"black"}/>Mariadb
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <GrOracle color={"black"}/>Oracle
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <SiSequelize color={"black"}/>Sequelize
                    </Tag>
                </div>

                <div>
                    <Header2>
                        Server Infra
                    </Header2>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <FaAws color={"black"}/>AWS
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <DiUbuntu color={"black"}/>Ubuntu
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <GrCentos color={"black"}/>Centos
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <FaWindows color={"black"}/>Windows
                    </Tag>

                    <Tag bgColor={"white"} fontColor={"black"}>
                        <FaDocker color={"black"}/>Docker
                    </Tag>
                </div>
            </div>

            <hr/>

            <div>
                <Header1>
                    Education
                </Header1>
            </div>
        </Root>
    )
};

export default Info;