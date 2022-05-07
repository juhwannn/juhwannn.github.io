import React, {useState} from "react";
import {useRouter} from "next/router";
import styled, {keyframes} from "styled-components";
import { AiFillGithub, AiOutlineMail, AiFillPhone } from "react-icons/Ai";
import { RiKakaoTalkFill } from "react-icons/Ri";
import { LeftColor, RightColor } from "/pageComponents/elements/Color";
import Info from "../pageComponents/Info";
import Project from "../pageComponents/Project";
import Knowledge from "../pageComponents/Knowledge";

const transitionSec = "1000ms";

const grow = keyframes`
    from { transform: translateY(3em) }
    to { transform: translateY(0) }
`

const Root = styled.div`
    .left {
        width: ${props => props.clickButton ? "50vw" : "100vw"};
        height: 100vh;
        float: left;
        
        transition-property: width;
        transition-duration: ${transitionSec};
        
        .leftHeader {
            width: 50vw;
            height: 5vh;
            
            float: left;
                 
            font-weight: bold;
            color: ${RightColor};
            
            padding-left: 30px;
            padding-top: 30px;
        }
        .leftHeader::after {
            display: block;
            content: "";
            clear: both;
        }
        
        .leftBody {
            width: ${props => props.clickButton ? "50vw" : "100vw"};
            height: 90vh;
            
            transition-duration: ${transitionSec};
            
            float: left;
    
            text-align: center;
            margin: auto;
            
            display: table;
            
            &:after {
                display: block;
                content: "";
                clear: both;
            }
            
            .leftContent {
                transition-duration: ${transitionSec};
                
                display: table-cell;
                vertical-align: middle;
                
                text-align: center;
                
                .introTitle {
                    font-size: 30px;
                    
                    margin-bottom: 33px;
                    
                    color: ${RightColor};
                }
            
                .introText {
                    font-size: 18px;
                    color: ${RightColor};
                    font-weight: lighter;
                    
                    margin-bottom: 50px;
                }
            
                .socialMediaIcon {
                    margin-top: 30px;
                    
                    .aiFillGithub, 
                    .aiOutlineMail, 
                    .riKakaoTalkFill, 
                    .aiFillPhone {
                        display: inline-block;
                        margin-left: 25px;
                        margin-right: 25px;
                        
                        position: relative;
                        
                        .aiFillGithubFront, .aiFillGithubBack,
                        .aiOutlineMailFront,.aiOutlineMailBack, 
                        .riKakaoTalkFillFront, .riKakaoTalkFillBack, 
                        .aiFillPhoneFront, .aiFillPhoneBack {
                            backface-visibility: hidden;
                            transition: 1s;
                            
                            cursor: pointer;
                        }
                        
                        .aiFillGithubFront, 
                        .aiOutlineMailFront, 
                        .riKakaoTalkFillFront,
                        .aiFillPhoneFront {
                            transform: rotateY(0deg);
                            position: absolute;
                            
                            color: ${RightColor};
                        }
                        
                        .aiFillGithubBack,
                        .aiOutlineMailBack,
                        .riKakaoTalkFillBack,
                        .aiFillPhoneBack {
                            transform: rotateY(-180deg);
                            
                            color: rgb(0, 86, 102);
                            
                            display: inline-block;
                            
                            .aiFillGithubBackText,
                            .aiOutlineMailBackText,
                            .riKakaoTalkFillBackText,
                            .aiFillPhoneBackText {
                                display: none;
                                position: absolute;
                                max-width: 200px;
                                border: 1px solid;
                                border-radius: 5px;
                                padding: 5px;
                                font-size: 0.8em;
                                color: white;
                                background-color: rgb(0, 86, 102);       
                                white-space: nowrap;          
                            }
                        }
                        
                        .aiFillGithubBack .aiFillGithubBackText,
                        .aiOutlineMailBack .aiOutlineMailBackText,
                        .riKakaoTalkFillBack .riKakaoTalkFillBackText,
                        .aiFillPhoneBack .aiFillPhoneBackText {
                            display: block;
                        }
                    }
                    
                    .aiFillGithub:hover .aiFillGithubFront,
                    .aiOutlineMail:hover .aiOutlineMailFront,
                    .riKakaoTalkFill:hover .riKakaoTalkFillFront,
                    .aiFillPhone:hover .aiFillPhoneFront {
                        transform: rotateY(180deg);
                    }
                    
                    .aiFillGithub:hover .aiFillGithubBack, 
                    .aiOutlineMail:hover .aiOutlineMailBack,
                    .riKakaoTalkFill:hover .riKakaoTalkFillBack,
                    .aiFillPhone:hover .aiFillPhoneBack {
                        transform: rotateY(0deg);
                    }
                }
                
                button {
                    width: 350px;
                    height: 50px;
                    border: none;
                    
                    margin-bottom: 5px;
                    transition:all 0.9s;
                }
                button:active {
                    outline: none;
                    box-shadow: none;
                }
                button:hover {
                    box-shadow: 0 80px 0 0 rgba(0,86,102,0.5) inset, 0 -80px 0 0 rgba(0,86,102,0.5) inset;
                    color: white;
                }
            }
        }
        
        .leftFooter {
            width: ${props => props.clickButton ? "50vw" : "100vw"};
            height: 5vh;
            
            transition-duration: ${transitionSec};
            
            float: left;
            
            font-size: 10px;
            font-weight: lighter;
            text-align: center;
        }
        .leftFooter::after {
            display: block;
            content: "";
            clear: both;
        }
    }
    
    .right {
        width: ${props => props.clickButton ? "50vw" : "0vw"};
        height: 100vh;
        overflow: auto;
        
        float: right;
        color: ${LeftColor};
        background: ${RightColor};
        
        transition-property: width, color;
        transition-duration: ${transitionSec}, ${transitionSec};
        
        .rightHeader {
            width: 50vw;
            height: 5vh;
            
            color: ${props => props.clickButton ? `${LeftColor}` : `${RightColor}`};
            transition-duration: ${transitionSec};
            
            float: right;
            text-align: right;
            
            font-weight: bold;
            
            padding-right: 30px;
            padding-top: 30px;
            
            overflow-y: hidden;

            .menuName {
                animation-name: ${grow};
                animation-duration: 1s;            
            }
        }
        .rightHeader::after {
            display: block;
            content: "";
            clear: both;
        }
        
        .rightBody {
            width: ${props => props.clickButton ? "50vw" : "0vw"};
            height: 90vh;
            
            transition-duration: ${transitionSec};
            
            float: right;
            
            text-align: center;
            
            display: table;
            
            overflow: auto;
            
            &:after {
                display: block;
                content: "";
                clear: both;
            }
            
            .rightContent {
                display: table-cell;
                vertical-align: middle;
                
                text-align: center;
            }
        }
        
        .rightFooter {
            width: ${props => props.clickButton ? "50vw" : "0vw"};
            height: 5vh;
            
            transition-duration: ${transitionSec};
            
            float: right;
            
            font-size: 10px;
            font-weight: lighter;
            text-align: center;
        }
        .rightFooter::after {
            display: block;
            content: "";
            clear: both;
        }
    }
`;

const ButtonClickHandle =
(
    clickButton,
    setClickButton,
    visible,
    setVisible,
    menuName,
    setMenuName
) => {

    if (clickButton && !visible) {
        setTimeout(() => {
            setMenuName("홈");
            setClickButton(!visible);
            setVisible(!visible);
        }, parseInt(transitionSec));
    }

    if (!clickButton && visible) {
        setTimeout(() => {
            setMenuName(menuName);
            setClickButton(!visible);
        }, parseInt(transitionSec));
    }

    return;
}

export default function Home() {
    const router = useRouter();

    const [infoVisible, setInfoVisible] = useState(false);
    const [projectVisible, setProjectVisible] = useState(false);
    const [knowledgeVisible, setKnowledgeVisible] = useState(false);

    const [clickButton, setClickButton] = useState(false);

    const [menuName, setMenuName] = useState("홈");


    return (
        <Root clickButton={clickButton}>
            <div className="left">
                <div className="leftHeader">
                    안주환 &nbsp;|&nbsp; 개발자
                </div>

                <div className="leftBody">
                    <div className="leftContent">
                        <div className="introTitle">
                            개발자 안주환입니다.
                        </div>

                        <div className="introText">
                            웹 풀사이클을 향해서 매일을 코드와 함께하고 있고, <br/>
                            좋은 코드작성과 구조를 목표로 하고 있습니다. <br/>
                        </div>
                        <button onClick={e => {
                            e.preventDefault();

                            setClickButton(!clickButton);

                            setInfoVisible(true);
                            setProjectVisible(false);
                            setKnowledgeVisible(false);

                            ButtonClickHandle(clickButton, setClickButton, infoVisible, setInfoVisible, "INFO", setMenuName);
                        }}>
                            INFO
                        </button><br/>

                        <button onClick={e => {
                            e.preventDefault();

                            setClickButton(!clickButton);

                            setInfoVisible(false);
                            setProjectVisible(true);
                            setKnowledgeVisible(false);

                            ButtonClickHandle(clickButton, setClickButton, projectVisible, setProjectVisible, "PROJECT", setMenuName);
                        }}>
                            PROJECT
                        </button><br/>

                        <button onClick={e => {
                            e.preventDefault();

                            setClickButton(!clickButton);

                            setInfoVisible(false);
                            setProjectVisible(false);
                            setKnowledgeVisible(true);

                            ButtonClickHandle(clickButton, setClickButton, knowledgeVisible, setKnowledgeVisible, "KNOWLEDGE", setMenuName);
                        }}>
                            KNOWLEDGE
                        </button><br/>

                        <button onClick={e => {
                            e.preventDefault();


                        }}>
                            MEMOIR
                        </button><br/>

                        <div className="socialMediaIcon">
                            <span className="aiFillGithub" onClick={e => {
                                e.preventDefault();

                                router.push("https://github.com/juhwannn");
                            }}>
                                <div className="aiFillGithubFront">
                                    <AiFillGithub size="35"/>
                                </div>

                                <div className="aiFillGithubBack">
                                    <AiFillGithub size="35"/>
                                </div>
                            </span>

                            <span className="aiOutlineMail">
                                <div className="aiOutlineMailFront">
                                    <AiOutlineMail size="35"/>
                                </div>

                                <div className="aiOutlineMailBack">
                                    <AiOutlineMail size="35"/>

                                    <span className="aiOutlineMailBackText">
                                        algorithm123@naver.com
                                    </span>
                                </div>
                            </span>

                            <span className="riKakaoTalkFill">
                                <div className="riKakaoTalkFillFront">
                                    <RiKakaoTalkFill size="35"/>
                                </div>

                                <div className="riKakaoTalkFillBack">
                                    <RiKakaoTalkFill size="35"/>

                                    <span className="riKakaoTalkFillBackText">
                                        algorithm123
                                    </span>
                                </div>
                            </span>

                            <span className="aiFillPhone">
                                <div className="aiFillPhoneFront">
                                    <AiFillPhone size="35"/>
                                </div>

                                <div className="aiFillPhoneBack">
                                    <AiFillPhone size="35"/>

                                    <span className="aiFillPhoneBackText">
                                        010&#45;7650&#45;0350
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="leftFooter">
                    Copyright 2022. juhwannn all rights reserved.
                </div>
            </div>

            <div className="right">
                <div className="rightHeader">
                    <div className="menuName">
                        {menuName}
                    </div>
                </div>

                <div className="rightBody">
                    <div className="rightContent">
                        <Info visible={infoVisible} setVisible={setInfoVisible}/>
                        <Project visible={projectVisible} setVisible={setProjectVisible}/>
                        <Knowledge visible={knowledgeVisible} setVisible={setKnowledgeVisible}/>
                    </div>
                </div>

                <div className="rightFooter">

                </div>
            </div>
        </Root>
    );
}
