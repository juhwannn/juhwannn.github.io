import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import Image from "next/image";
import TagList from "../../pageComponents/TagList";
import getTagList from "../api/tagList";
import DirectoryStructure from "../api/dirTree";
import path from "path";
import * as process from "process";
import MenuTree from "../../pageComponents/MenuTree";
import getSeries from "../api/series";

const Root = styled.div`

    min-height: 90vh;
    height: auto;
    width: 100%;
    
    display: flex;
    
    padding-top: 2%;
    
    .devlogTagList {
        flex: 0.5;
        padding-left: 2%;
    }
    
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
    
    .series {
        .cardSeries {
            height: 35vh;
            flex-wrap: wrap;
            width: 42%;
            margin-top: 8%;
            margin-left: 4%;
            margin-right: 4%;
            
            cursor: pointer;
            
            .cardSeriesThumb {
                position: relative;
                width: 100%;
                height: 75%;
            }
            
            .cardSeriesSubject {
                font-size: 1.5rem;
                line-height: 5vh;
                font-weight: bold;
                
                .cardSeriesCount {
                    color: #9DC9BF;
                    font-size: 1rem;
                    font-weight: normal;
                }
            }
            
            .cardSeriesDate {
                opacity: 0.5;
                font-size: 0.7rem;
            }
        }
    }
`;

const getLastPostThumb = (series) => {
    series.sort((a, b) => {
        return new Date(b.createDate) - new Date(a.createDate);
    });

    return (
        <Image src={`/images/devlogThumb/${series[0]?.thumb ?? "defaultThumb.svg"}`} layout="fill" alt="thumb nail"/>
    );
}

const getLastPostDate = (series) => {
    series.sort((a, b) => {
        return new Date(b.createDate) - new Date(a.createDate);
    });

    return (
        <div>
            마지막 업데이트 : {series[0].createDate}
        </div>
    );
}

export const getStaticProps = () => {
    const tagList = getTagList();
    const seriesList = getSeries();
    const menuList = DirectoryStructure(path.join(process.cwd(), '/posts'), {"posts": {}});

    if (!tagList || !seriesList || !menuList) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            tagList,
            seriesList: seriesList.files,
            menuList,
        }
    }
};

export default function Home({tagList, seriesList, menuList}) {
    const router = useRouter();

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

                <div className="series">
                    {
                        Object.keys(seriesList)?.map((v, i) => {

                            return (
                                <div className="cardSeries" key={i} onClick={e => {
                                    e.preventDefault();
                                    // TODO: router.push(query) query 길이 초과하진 않을지 검색해보고 바꾸기
                                    router.push({pathname: "/devlog/seriesDetail", query: {seriesList: JSON.stringify(seriesList[v].file), seriesName: v}});
                                }}>
                                    <div className="cardSeriesThumb">
                                        {
                                            getLastPostThumb(seriesList[v].file)
                                        }
                                    </div>
                                    <div className="cardSeriesSubject">
                                        {v} <span className="cardSeriesCount">({seriesList[v].count})</span>
                                    </div>

                                    <div className="cardSeriesDate">
                                        {
                                            getLastPostDate(seriesList[v].file)
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="devlogMenuList">
                <MenuTree value={menuList}/>
            </div>
        </Root>
    );
}
