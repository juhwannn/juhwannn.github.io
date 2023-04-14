import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {marked} from "marked";
import Prism from "prismjs";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";
import path from 'path';
import LatelyPosts from "../api/latelyPosts";
import MenuTree from "../../pageComponents/MenuTree";
import getTagList from "../api/tagList";
import TagList from "../../pageComponents/TagList";
import DirectoryStructure from "../api/dirTree";
import * as process from "process";

const Root = styled.div`
    img {
      width: 100%;
    }
    
    min-height: 90vh;
    height: auto;
    width: 100%;
    
    display: flex;
    
    padding-top: 2%;
    
    .devlogTagList {
        flex: 0.5;
        padding-left: 2%;
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
`;

const Card = styled.div`
    display: flex;
    height: 30vh;
    
    transition: box-shadow 0.3s;
    box-shadow: 4px 4px 4px 4px rgba(12, 12, 12, 0.2);
    
    border-radius: 10px;
    border: 1px solid white;
     
    padding: 2%;
    margin-bottom: 5vh;
    
    &:hover {
        transition: box-shadow 0.3s;
        box-shadow: 8px 8px 8px 8px rgba(12, 12, 12, 0.4);
        
        cursor: pointer;
    }
    
    
    .cardLeft {
        position: relative;
        flex: 3;
        
        .cardFileName {
            font-size: 2rem;
            font-weight: bold;
        }
        
        .cardCreateDate {
            font-size: 0.8rem;
            opacity: 0.5;
        }
        
        .cardModifyDate {
            font-size: 0.8rem;
            opacity: 0.5;
        }
        
        .cardMatterSummary {
            opacity: 0.5;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
        }
        
        .cardMatterTag {
            position: absolute;
            bottom: 0;
            
            .cardMatterTags {
                opacity: 0.7;
                background: #7C7484;
                color: antiquewhite;
                border-radius: 5px;
                
                padding: 5px 10px;
                margin-right: 1vh;
                
                transition: opacity 0.5s;
                
                &:hover {
                    transition: opacity 0.3s;
                    opacity: 1;
                    
                    cursor: pointer;
                }
            }
        }
    }
    
    .cardMatterThumb {
        flex: 1.2;
        position: relative;
        margin: 10px;
    }
`;

export const getStaticProps = () => {
    const tagList = getTagList();
    const latelyPosts = LatelyPosts();
    const menuList = DirectoryStructure(path.join(process.cwd(), '/posts'), {"posts": {}});

    if (!tagList || !latelyPosts || !menuList) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            tagList,
            latelyPosts: latelyPosts.files,
            menuList
        }
    }
};

export default function Home({tagList, latelyPosts, menuList}) {
    const router = useRouter();

    const tagParam = router.query;

    return (
        <Root>
            <div className="devlogTagList">
                <TagList tagList={tagList}/>
            </div>

            <div className="devlogPost">
                <div className="postType">
                    <a className={router.pathname === "/devlog" ? "active" : ""} onClick={e => {
                        e.preventDefault();

                        router.push("/devlog");
                    }}>포스트</a>

                    <a className={router.pathname === "/devlog/series" ? "active" : ""} onClick={e => {
                        e.preventDefault();

                        router.push("/devlog/series");
                    }}>시리즈</a>
                </div>
                {
                    latelyPosts.map((v, i) => {
                        return (
                            <Link passHref key={i} href={{pathname: "/posts" + v?.filePath.split("/posts")[1]}}>
                                <Card>
                                    <div className="cardLeft">
                                        <div className="cardFileName">
                                            {v?.fileName}
                                        </div>

                                        <div className="cardCreateDate">
                                            작성 : {v?.createDate}
                                        </div>

                                        <div className="cardModifyDate">
                                            수정 : {v?.modifyDate}
                                        </div>
                                        <hr/>
                                        <div className="cardMatterSummary">
                                            {v?.matters?.summary}
                                        </div>

                                        <div className="cardMatterTag">
                                            {
                                                v?.matters?.tags?.map((tag, index) => {
                                                    return (
                                                        <Link
                                                            key={index}
                                                            passHref
                                                            href={{
                                                                pathname: "/devlog",
                                                                query: tag
                                                            }}>
                                                            <a className="cardMatterTags">
                                                                {tag}
                                                            </a>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className="cardMatterThumb">
                                        <Image priority src={`/images/devlogThumb/${v?.matters?.thumb ?? "defaultThumb.svg"}`} layout="fill" alt="thumb nail"/>
                                    </div>
                                </Card>
                            </Link>
                        )
                    })
                }
            </div>

            <div className="devlogMenuList">
                <MenuTree value={menuList}/>
            </div>
        </Root>
    )
}
