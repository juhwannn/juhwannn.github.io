import React, {useState} from "react";
import {useRouter} from "next/router";
import styled, {keyframes} from "styled-components";
import { AiFillGithub, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { LeftColor, RightColor } from "/pageComponents/elements/Color";
import {LeftBody, RightBody} from "../pageComponents/Body";
import Info from "../pageComponents/Info";

const Root = styled.div`
    .body {
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
`;

const ClickAnimation = keyframes`
    0% {
        opacity: 0;
    }
    40% {
        opacity: 0;
        transform: translateY(40px);
    }
`;
export default function Home() {
    const router = useRouter();

    const [info, setInfo] = useState(false);
    const [project, setProject] = useState(false);
    const [knowledge, setKnowledge] = useState(false);


    return (
        <Root>
            <div className="body">
                <LeftBody>
                    <div className="introTitle">
                        개발자 안주환입니다.
                    </div>

                    <div className="introText">
                        웹 풀사이클을 향해서 매일을 코드와 함께하고 있고, <br/>
                        좋은 코드작성과 구조를 목표로 하고 있습니다. <br/>
                    </div>
                    <button onClick={e => {
                        e.preventDefault();

                        setInfo(true);
                    }}>
                        INFO
                    </button><br/>

                    <button onClick={e => {
                        e.preventDefault();

                    }}>
                        PROJECT
                    </button><br/>

                    <button onClick={e => {
                        e.preventDefault();

                        alert("KNOWLEDGE");
                    }}>
                        KNOWLEDGE
                    </button><br/>

                    <button onClick={e => {
                        e.preventDefault();

                        alert("MENU4");
                    }}>
                        MENU4
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
                </LeftBody>

                <RightBody>
                    <Info/>
                </RightBody>
            </div>
        </Root>
    );
}
