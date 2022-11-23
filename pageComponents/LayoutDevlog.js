import React, {useEffect, useState} from "react";

import styled from 'styled-components';
import Head from "next/head";
import {RightColor} from "./elements/Color";
import {useRouter} from "next/router";
import axios from "axios";
import MenuTree from "./MenuTree";

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
        width: 100%;
        background: red;
        
        display: flex;
        .devlogTagList {
            background: black;
            flex: 1;
        }
        
        .devlogPost {
            background: #eaeaea;
            
            flex: 4;
        }
        
        .devlogMenuList {
            background: #0070f3;
            
            flex: 1;
        }
    }
`;


const LayoutDevlog = ({children}) => {
    const router = useRouter();

    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/file/");
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
        </Root>
    );
};

export default LayoutDevlog;
