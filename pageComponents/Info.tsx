import styled from "styled-components";
import React from "react";
import {SiNextdotjs, SiExpress, SiTheconversation, SiJavascript, SiJenkins, SiMariadb, SiMysql, SiSequelize, SiSubversion, SiJava, SiSpring} from "react-icons/Si";
import {SiReact} from "react-icons/Si";
import {DiCss3, DiUbuntu} from "react-icons/Di";
import {AiFillGithub} from "react-icons/Ai";
import {FaAws, FaDocker, FaNode, FaWindows, FaRegBuilding} from "react-icons/Fa";
import {TiHtml5} from "react-icons/Ti";
import {GrCentos, GrOracle} from "react-icons/Gr";
import {BsKeyboard} from "react-icons/Bs";
import {MdSchool} from "react-icons/Md";
import {LeftColor, RightColor} from "./elements/Color";
import {Description, Header1, Header2, Header3} from "./elements/Header";
import {Tag} from "./elements/Tag";
import {UnorderedList} from "./elements/UnorderedList";
import {FadeOut, FadeIn, FadeTime} from "./elements/Animation";

const Root = styled.div`
    animation: ${FadeIn} ${FadeTime};
    
    svg {
        vertical-align: bottom;
    }
    
    text-align: left;
    
    padding-left: 10vw;
    padding-right: 10vw;
    
    overflow: hidden;
    
    >hr {
        margin-top: 3vh;
        margin-bottom: 3vh;
    }  
`;


const Info =
({
    visible,
    setVisible
}) => {

    return (
        <Root style={{display: visible ? "block" : "none"}}>
            <Header1>
                <SiTheconversation/>
                TMI
            </Header1>

            <Header3>
                감성적인 것과 철학적인 것을 좋아합니다. <br/>
                인생이 묻어나온 것을 좋아합니다. <br/>
                강아지보단 고양이를 좋아합니다. <br/>
                랩퍼 창모를 좋아합니다. <br/>
                MBTI 는 INFP 입니다. <br/>
            </Header3>

            <hr/>

            <Header1>
                <FaRegBuilding/>
                Career
            </Header1>

            <UnorderedList>
                <Header2>
                    코드와이즈 <Description>2020.05 ~</Description>
                </Header2>

                <hr/>

                <li>
                    직책 : 선임 연구원
                </li>

                <li>
                    기술스택 : React, AWS, Docker, Node, Express, Java, Spring Boot, Spring Framework
                </li>

                <li>
                    주요업무 : 보안 솔루션 개발 및 유지보수
                </li>
            </UnorderedList>

            <UnorderedList>
                <Header2>
                    호서전문학교 <Description>2017.03 ~ 2020.03</Description>
                </Header2>

                <hr/>

                <li>
                    직책 : 학생
                </li>

                <li>
                    기술스택 : MySQL, JAVA, JavaScript, SpringFrameWork, Swift
                </li>
            </UnorderedList>

            <hr/>

            <Header1>
                <BsKeyboard/>
                TechSkills
            </Header1>

            <UnorderedList>
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
            </UnorderedList>

            <UnorderedList>
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

                <li>
                    <Tag bgColor={"white"} fontColor={"red"}>
                        <SiJava color={"red"}/>JAVA
                    </Tag>
                </li>

                <li>
                    <Tag bgColor={"white"} fontColor={"green"}>
                        <SiSpring color={"green"}/>Spring Framework
                    </Tag>
                </li>
            </UnorderedList>

            <UnorderedList>
                <Header2>
                    CI/CD
                </Header2>

                <hr/>

                <li>
                    <Tag bgColor={"white"} fontColor={"#B84138"}>
                        <SiJenkins color={"#B84138"}/>Jenkins
                    </Tag>
                </li>
            </UnorderedList>

            <UnorderedList>
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
            </UnorderedList>

            <UnorderedList>
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
            </UnorderedList>

            <UnorderedList>
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
            </UnorderedList>
        </Root>
    )
};

export default Info;
