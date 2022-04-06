import React, {useState} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';

const leftColor = "#707070";
const rightColor = "#FFF";

const MainSubject = styled.div`
    font-size: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to left, ${leftColor} 50%, ${rightColor} 50%);
    -webkit-background-clip: text;
    color: transparent;
`;

const Root = styled.div`
    background: linear-gradient(to right, ${leftColor} 50%, ${rightColor} 50%);
    
    .header {
        height: 50px;
        
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
        height: 1000px;
        
        .leftBody {
            float: left;
            
            width: 50%;
            height: 100%;
        }
        
        .rightBody {
            float: right;
            
            width: 50%;
            height: 100%;
           
            .introTitle {
                font-size: 30px;
            }
            
            .introText {
                font-size: 18px;
                
                font-weight: lighter;
            }
        }
    }
    .body::after {
        display: block;
        content: "";
        clear: both;
    }
    
    .footer {
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
            <MainSubject>Dev Blog</MainSubject>
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
                    Image
                </div>

                <div className="rightBody">
                    <div className="introTitle">
                        개발자 안주환입니다.
                    </div>

                    <div className="introText">
                        웹 풀사이클을 향해서 매일을 코드와 함께하고 있고, <br/>
                        좋은 코드작성과 구조를 목표로 하고 있습니다. <br/>
                    </div>
                    MENU1 <br/>
                    MENU2 <br/>
                    MENU3 <br/>
                    MENU4 <br/>
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
