import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Root = styled.div`
    .seriesName {
        font-weight: bold;
        font-size: 2rem;
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
    
    .seriesDetailList {
        .seriesDetail {
            display: block;
            margin-top: 3vh;
            width: 100%;
            height: 35%;
            cursor: pointer;
        
            .seriesDetailSubject {
                width: 100%;
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
                
                .subjectNumbering {
                    color: #9DC9BF;
                    font-style: italic;
                    opacity: 0.5;
                    
                    margin-right: 1rem;
                }
                
                >.createDate {
                    margin-left: 1rem;
                    
                    opacity: 0.5;
                    font-size: 0.7rem;
                    font-weight: normal;
                }
            }
            
            .thumbSummaryContainer {
                display: flex;
                padding-left: 1rem;
                padding-right: 1rem;
                
                .seriesDetailThumb {
                    flex: 3;
                    position: relative;
                    width: 150px;
                    height: 100px;
                    display: inline-block;
                    max-width: 25%;
                    margin-right: 5vw;
                }
                
                .seriesDetailSummary {
                    flex: 7;
                    height: 100%;
                    opacity: 0.5;
                    word-break: break-all;
                    overflow: hidden;
                    
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                }            
            }
            
            &:hover {
                .subjectText {
                    text-decoration: underline;
                    text-underline-position: under;
                    text-decoration-color: #9DC9BF;                    
                }
            }
        }
    }
`;

export default function Home() {
    const router = useRouter();
    const [seriesList, setSeriesList] = useState([]);
    const [seriesName, setSeriesName] = useState("");

    useEffect(() => {
        try {
            const query = router?.query;
            if (Object.keys(query).length === 0) {
                return;
            }

            setSeriesName(query?.seriesName);
            setSeriesList(JSON.parse(query?.seriesList));
        } catch (e) {
            alert(e);
            return;
        }
    }, [router]);

    return (
        <Root>
            <div className="seriesName">
                {seriesName}
            </div>

            <hr/>

            <div className="seriesDetailList">
                {
                    seriesList?.map((v, i) => {
                        console.log(v);
                        return (
                            <Link passHref key={i} href={{pathname: "/posts" + v?.path.split("/posts")[1]}}>
                                <div className="seriesDetail">
                                    <div className="seriesDetailSubject">
                                        <span className="subjectNumbering">{i + 1}.</span>
                                        <span className="subjectText">{v?.name}</span>
                                        <span className="createDate">({v?.createDate})</span>
                                    </div>

                                    <div className="thumbSummaryContainer">
                                        <div className="seriesDetailThumb">
                                            <Image priority src={`/images/devlogThumb/${v?.thumb ?? "defaultThumb.svg"}`} layout="fill" alt="thumb nail"/>
                                        </div>

                                        <div className="seriesDetailSummary">
                                            {v?.summary}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </Root>
    )
}
