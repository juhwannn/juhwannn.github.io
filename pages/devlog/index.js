import styled from "styled-components";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {marked} from "marked";
import Prism from "prismjs";
import {UnorderedList} from "../../pageComponents/elements/UnorderedList";
import {Description, Header2} from "../../pageComponents/elements/Header";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";

const Root = styled.div`
    img {
      width: 100%;
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
        }
        
        .cardModifyDate {
            font-size: 0.8rem;
        }
        
        .cardMatterSummary {
            opacity: 0.5;
            word-break:break-all;
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


export default function Home() {
    const router = useRouter();

    const [latelyPosts, setLatelyPosts] = useState([]);

    const tagParam = router.query;

    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get("/api/latelyPosts", {params: tagParam});

                setLatelyPosts(response?.data?.latelyPosts.files);
            } catch (e) {
                alert(e);
                return;
            }
        })();
    }, [tagParam]);

    return (
        <Root>
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
        </Root>
    )
}
