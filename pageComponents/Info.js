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
import {MdSchool} from "react-icons/Md";
import {LeftColor, RightColor} from "./elements/Color";

const Root = styled.div`
    text-align: left;
    
    padding-left: 10vw;
    padding-right: 10vw;
    
    overflow: hidden;
    
    >hr {
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
    
    .techSkill {
        .myList {
            padding-left: 3vw;
            padding-right: 2vw;
            padding-bottom: 2vh;
            
            display: inline-block;
            
            color: ${RightColor};
            background: ${LeftColor};
            
            border-radius: 5px;
            
            width: 100%;
            height: auto;
            
            li {
                list-style-type: square;
                
                margin-top: 1vh;
            }
        }
    }
`;

const Header1 = styled.h1`
    font-size: 2rem;
`;

const Header2 = styled.h2`
    color: #070707;
    
    font-size: 1.5rem;
`;

const Header3 = styled.h3`
    font-size: 1.17rem;
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

            <div className="techSkill">
                <Header1>
                    <BsKeyboard/>
                    TechSkills
                </Header1>

                <div>
                    <ul className="myList">
                        <Header2>
                            FrontEnd
                        </Header2>

                        <hr/>

                        <li>
                            <Tag bgColor={"white"} fontColor={"black"}>
                                <SiNextdotjs color={"black"}/>Next.js
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#7DD1EF"}>
                                <SiReact color={"#7DD1EF"}/>React.js
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#E8D44C"}>
                                <SiJavascript color={"#E8D44C"}/>Javascript
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#C85333"}>
                                <TiHtml5 color={"#C85333"}/>HTML
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#2866B1"}>
                                <DiCss3 color={"#2866B1"}/>CSS
                            </Tag>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="myList">
                        <Header2>
                            BackEnd
                        </Header2>

                        <hr/>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#8CC046"}>
                                <FaNode color={"#8CC046"}/>Node.js
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"black"}>
                                <SiExpress color={"black"}/>Express.js
                            </Tag>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="myList">
                        <Header2>
                            CI/CD
                        </Header2>

                        <hr/>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#B84138"}>
                                <SiJenkins color={"#B84138"}/>Jenkins
                            </Tag>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="myList">
                        <Header2>
                            VCS
                        </Header2>

                        <hr/>

                        <li>
                            <Tag bgColor={"white"} fontColor={"black"}>
                                <AiFillGithub color={"black"}/>GitHub
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#7D94BB"}>
                                <SiSubversion color={"#7D94BB"}/>SVN
                            </Tag>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="myList">
                        <Header2>
                            Database
                        </Header2>

                        <hr/>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#2D6C8B"}>
                                <SiMysql color={"#2D6C8B"}/>Mysql
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#113140"}>
                                <SiMariadb color={"#113140"}/>Mariadb
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#B6624E"}>
                                <GrOracle color={"#B6624E"}/>Oracle
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#3574AB"}>
                                <SiSequelize color={"#3574AB"}/>Sequelize
                            </Tag>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="myList">
                        <Header2>
                            Server Infra
                        </Header2>

                        <hr/>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#DF933D"}>
                                <FaAws color={"#DF933D"}/>AWS
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#C34E29"}>
                                <DiUbuntu color={"#C34E29"}/>Ubuntu
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#BDC388"}>
                                <GrCentos color={"#BDC388"}/>Centos
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#2D72C5"}>
                                <FaWindows color={"#2D72C5"}/>Windows
                            </Tag>
                        </li>

                        <li>
                            <Tag bgColor={"white"} fontColor={"#438DDA"}>
                                <FaDocker color={"#438DDA"}/>Docker
                            </Tag>
                        </li>
                    </ul>
                </div>
            </div>

            <hr/>

            <div>
                <Header1>
                    <MdSchool/>
                    Education
                </Header1>
            </div>
        </Root>
    )
};

export default Info;