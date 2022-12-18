import React, {useEffect, useState} from "react";

import styled from 'styled-components';

import Head from "next/head";
import {RightColor} from "./elements/Color";
import {useRouter} from "next/router";
import axios from "axios";
import MenuTree from "./MenuTree";
import ToggleSwitch from "./elements/ToggleSwitch";

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
        height: auto;
        width: 100%;
        
        display: flex;
        .devlogTagList {
            flex: 1;
            padding-top: 2%;
        }
        
        .devlogPost {
            padding-top: 2%;
            padding-left: 10%;
            padding-right: 10%;
            flex: 3;
        }
        
        .devlogMenuList {
            padding-top: 2%;
            flex: 1;
        }
    }
    
    .devlogFooter {
        height: 5vh;
        
        font-size: 10px;
        font-weight: lighter;
        text-align: center;
    }
`;

const toggleTheme = (theme, setTheme) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
};

const LayoutDevlog = ({children, theme, setTheme}) => {
    const router = useRouter();

    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/dirTree/");
                setMenuList(response?.data?.result);
            } catch (e) {
                console.log(e);
                return;
            }
        })();
    }, []);

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
                    <ToggleSwitch clickHandler={e => toggleTheme(theme, setTheme)}/>
                </div>
            </div>

            <div className="devlogBody">
                <div className="devlogTagList">
                    TagList
                </div>

                <div className="devlogPost">
                    {children}
                </div>

                <div className="devlogMenuList">
                    <MenuTree value={menuList}/>
                </div>
            </div>

            <div className="devlogFooter">
                Copyright 2022. juhwannn all rights reserved.
            </div>
        </Root>
    );
};

export default LayoutDevlog;
