import React from "react";

import styled from 'styled-components';
import Head from "next/head";
import {RightColor} from "./elements/Color";
import {useRouter} from "next/router";
import Link from "next/link";

const Root = styled.div`
    .devlogHeader {
        height: 5vh;
        padding-left: 30px;
        padding-top: 30px;
        padding-right: 30px;
        
        .devlogLeftHeader {
            float: left;
            font-weight: bold;
            color: ${RightColor};
        }
        
        .devlogRightHeader {
            .devlogMenu {
                float: right;
                font-weight: bold;
                color: ${RightColor};
                
                margin-right: 30px;
            }
            .devlogMenu:after {
                content:"";
                display: block; 
                border-bottom: 3px solid #000; 
                transition: all 250ms ease-in-out; 
                left: 50%; 
                width: 0;
            }
            .devlogMenu:hover:after {
                transition: all 250ms ease-in-out;
                left: 0%;
                width: 100%;
            }
        }
    }
    
    .devlogBody {
        height: auto;
        width: 60%;
        
        background: red;
    }
`;

const LayoutDevlog = ({children}) => {
    const router = useRouter();

    return (
        <Root>
            <Head>
                <title>Devlog</title>
            </Head>

            <div className="devlogHeader">
                <div className="devlogLeftHeader">
                    DEVLOG
                </div>

                <div className="devlogRightHeader">
                    <a className="devlogMenu" onClick={e => router.push("/devlog")}> DEVLOG </a>
                    <a className="devlogMenu" onClick={e => router.push("/")}> HOME </a>
                </div>
            </div>

            <div className="devlogBody">
                {children}
            </div>
        </Root>
    );
};

export default LayoutDevlog;
