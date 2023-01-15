import React, {useEffect, useState} from "react";

import styled from 'styled-components';

import Head from "next/head";
import {RightColor} from "./elements/Color";
import {useRouter} from "next/router";
import axios from "axios";
import MenuTree from "./MenuTree";
import ToggleSwitch from "./elements/ToggleSwitch";
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
            font-size: 1.5rem;
            color: ${RightColor};
        }
        
        .devlogRightHeader {
            .devlogMenu, label{
                float: right;
                font-weight: bold;
                cursor: pointer;
                color: ${RightColor};
                
                margin-right: 30px;
            }
            .devlogMenu:after {
                content:"";
                display: block; 
                border-bottom: 3px solid rgba(0,86,102); 
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
        
    }
    
    .devlogFooter {
        height: 5vh;
        
        font-size: 10px;
        font-weight: lighter;
        text-align: center;
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

            <div className="devlogFooter">
                Copyright 2022. juhwannn all rights reserved.
            </div>
        </Root>
    );
};

export default LayoutDevlog;
