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
        min-height: 90vh;
        height: auto;
        width: 100%;
        
        display: flex;
        
        padding-top: 2%;
        
        .devlogTagList {
            flex: 0.5;
            
            padding-left: 2%;
            
            .tagSumCount {
                color: #9DC9BF;
                margin-left: 1vw;
                font-weight: normal;
            }
            
            .tagList {
                font-weight: bold;
                
                &:hover {
                    text-decoration: underline;
                    text-decoration-color: #9DC9BF;
                    text-underline-position: under;
                    
                    cursor: pointer;
                }
            }
            
            .devlogTagName {
                font-weight: bold;
                
                &:hover {
                    text-decoration: underline;
                    text-decoration-color: #9DC9BF;
                    text-underline-position: under;
                    
                    cursor: pointer;
                }
            }
            
            .devlogTagCount {
                color: #9DC9BF;
                margin-left: 1vw;
            }
        }
        
        .devlogPost {
            padding-left: 5%;
            padding-right: 5%;
            flex: 3;
            
            .postType {
                text-align: center;
                
                height: 6vh;
                
                >a {
                    font-size: 1.5rem;
                    font-weight: bold;
                    
                    margin-left: 5%;
                    margin-right: 5%;
                    transition: color 0.3s;
                    &:hover {
                        transition: color 0.3s;
                        
                        color: #9DC9BF;
                        
                        cursor: pointer;
                    }
                }
                >a.active {
                    color: #9DC9BF;
                }
            }
        }
        
        .devlogMenuList {
            flex: 0.8;
        }
    }
    
    .devlogFooter {
        height: 5vh;
        
        font-size: 10px;
        font-weight: lighter;
        text-align: center;
    }
`;

const sumTagCount = (tagList) => {
    let sum = 0;

    for (const value of Object.values(tagList)) {
        sum += value
    }

    return sum;
}

const TagList = (value) => {
    const keys = Object.keys(value);
    const tagCount = sumTagCount(value);

    return (
        <div>
            <Link
                passHref
                href={{
                    pathname: "/devlog"
                }}
            ><a className="tagList">태그 목록</a></Link>
            <a className="tagSumCount">({tagCount})</a>
            <hr/>
            {
                keys.map((v, i) => {
                    return (
                        <div key={i}>
                            <Link
                                passHref
                                href={{
                                    pathname: "/devlog",
                                    query: v
                                }}
                            ><a className="devlogTagName">{v}</a></Link>
                            <a className="devlogTagCount">({value[v]})</a>
                        </div>
                    )
                })
            }
        </div>
    );
}

const LayoutDevlog = ({children}) => {
    const router = useRouter();

    const [menuList, setMenuList] = useState([]);
    const [tagList, setTagList] = useState([]);

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

    useEffect(() => {
        (async () => {
            try {
                const responses = await axios.get("/api/tagList/");
                setTagList(responses?.data?.tagList);

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
                    {
                        TagList(tagList)
                    }
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
