import React, {useState} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import Image from "next/image";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
import { AiFillGithub, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { LeftColor, RightColor } from "/pageComponents/elements/Color";
import {LeftBody, RightBody} from "../pageComponents/Body";

const MainSubject = styled.div`
    font-size: 50px;
    position: absolute;
    left: 50%;
    top: 3.5%;
    transform: translateX(-50%);
    background: linear-gradient(to left, ${LeftColor} 50%, ${RightColor} 50%);
    -webkit-background-clip: text;
    color: transparent;
`;

const Root = styled.div`
    background: linear-gradient(to right, ${LeftColor} 50%, ${RightColor} 50%);
    
    .body {
        
        .imageSlide {
            //overflow: hidden;
            //font-size: 0;
            //white-space: nowrap;
            //width: 100%;
            //height: 100%;
            //transition: text-indent 500ms;
            //position: relative;
            display: flex;
            justify-content: center;
            
            .image1 {
                width: 600px;
                height: 450px;
                background-image: url("/images/A.png");
                background-size: cover;
                box-shadow: 1px 1px 2px grey, 0 0 25px white, 0 0 5px lightgrey;
            }
            
            //.image2 {
            //    width: 600px;
            //    height: 450px;
            //    background-image: url("/images/B.png");
            //    background-size: cover;
            //    box-shadow: 1px 1px 2px grey, 0 0 25px white, 0 0 5px lightgrey;                    
            //}
            //
            //.image3 {
            //    width: 600px;
            //    height: 450px;
            //    background-image: url("/images/C.png");
            //    background-size: cover;
            //    box-shadow: 1px 1px 2px grey, 0 0 25px white, 0 0 5px lightgrey;                    
            //}
        }
    
        
        .introTitle {
            font-size: 30px;
            
            margin-bottom: 33px;
        }
    
        .introText {
            font-size: 18px;
            
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
                    
                    color: ${LeftColor};
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

export default function Home() {
    const router = useRouter();

    return (
        <Root>
            <MainSubject>DevBlog</MainSubject>

            <div className="body">
                <LeftBody>
                    <div className="imageSlide">
                        <div className="image1" onClick={e => {
                            e.preventDefault();

                            alert("이미지 슬라이드 추가 예정");
                        }}/>
                        <div className="image2"/>
                        <div className="image3"/>
                        {/*<Image*/}
                        {/*    src="/images/A.png"*/}
                        {/*    width="600"*/}
                        {/*    height="450"*/}
                        {/*    alt="logo"*/}
                        {/*    className="image1"*/}
                        {/*/>*/}
                        {/*<Image*/}
                        {/*    src="/images/B.png"*/}
                        {/*    width="600"*/}
                        {/*    height="450"*/}
                        {/*    alt="logo"*/}
                        {/*    className="image2"*/}
                        {/*/>*/}
                        {/*<Image*/}
                        {/*    src="/images/C.png"*/}
                        {/*    width="600"*/}
                        {/*    height="450"*/}
                        {/*    alt="logo"*/}
                        {/*    className="image3"*/}
                        {/*/>*/}
                    </div>
                </LeftBody>

                <RightBody>
                    <div className="introTitle">
                        개발자 안주환입니다.
                    </div>

                    <div className="introText">
                        웹 풀사이클을 향해서 매일을 코드와 함께하고 있고, <br/>
                        좋은 코드작성과 구조를 목표로 하고 있습니다. <br/>
                    </div>
                    <button onClick={e => {
                        e.preventDefault();

                        router.push("/info");
                    }}>
                        INFO
                    </button><br/>

                    <button onClick={e => {
                        e.preventDefault();

                        router.push("/project");
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
                </RightBody>
            </div>
        </Root>
    );
}
