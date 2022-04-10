import React, {useState} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import Image from "next/image";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
import { AiFillGithub, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";

const leftColor = "#707070";
const rightColor = "#FFF";

const MainSubject = styled.div`
    font-size: 50px;
    position: absolute;
    left: 50%;
    top: 3.5%;
    transform: translateX(-50%);
    background: linear-gradient(to left, ${leftColor} 50%, ${rightColor} 50%);
    -webkit-background-clip: text;
    color: transparent;
`;

const Root = styled.div`
    background: linear-gradient(to right, ${leftColor} 50%, ${rightColor} 50%);
    height: 100vh;
    
    .header {
        height: 5vh;
        
        .leftHeader {
            float: left;
            
            width: 50%;
            height: 100%;
                        
            color: ${rightColor};
            
            padding-left: 30px;
            padding-top: 30px;
        }
        
        .rightHeader {
            float: right;
            text-align: right;
            
            width: 50%;
            height: 100%;
            
            color: ${leftColor};
            
            padding-right: 30px;
            padding-top: 30px;
        }
    }
    .header::after {
        display: block;
        content: "";
        clear: both;
    }
    
    .body {
        height: 90vh;
        
        .leftBody {
            float: left;
            
            width: 50%;
            height: 100%;
            
            padding-top: 100px;
            
            text-align: center;
            
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
        }
        .leftBody::after {
            display: block;
            content: "";
            clear: both;
        }
        
        .rightBody {
            float: right;
            
            width: 50%;
            height: 100%;
            padding-top: 100px;
            
            text-align: center;
            
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
        .rightBody::after {
            display: block;
            content: "";
            clear: both;
        }
    }
    .body::after {
        display: block;
        content: "";
        clear: both;
    }
    
    .footer {
        height: 5vh;
        .leftFooter {
            float: left;
            
            width: 50%;
            height: 100%;
            
        }
        
        .rightFooter {
            float: right;
            
            width: 50%;
            height: 100%;
            
        }
    }
    .footer::after {
        display: block;
        content: "";
        clear: both;
    }
`;

export default function Home() {
    const router = useRouter();


    return (
        <Root>
            <MainSubject>DevBlog</MainSubject>
            <div className="header">
                <div className="leftHeader">
                    안주환 &nbsp;|&nbsp; 개발자
                </div>

                <div className="rightHeader">
                    홈
                </div>
            </div>

            <div className="body">
                <div className="leftBody">
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
                </div>

                <div className="rightBody">
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

                        alert("PROJECT");
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
                        <AiFillGithub size="35" style={{marginRight: "50px"}}/>
                        <AiOutlineMail size="35" style={{marginRight: "50px"}}/>
                        <RiKakaoTalkFill size="35" style={{marginRight: "50px"}}/>
                        <AiFillPhone size="35"/>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="leftFooter">
                    leftFooter
                </div>

                <div className="rightFooter">
                    rightFooter
                </div>
            </div>
        </Root>
    );
}
