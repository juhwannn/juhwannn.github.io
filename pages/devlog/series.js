import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import axios from "axios";
import Image from "next/image";

const Root = styled.div`
    .series {
        display: flex;
        flex-wrap: wrap;
        
        .cardSeries {
            height: 30vh;
            flex-wrap: wrap;
            width: 50%;
            margin-top: 8%;
            padding-left: 5%;
            padding-right: 5%;
            
            .cardSeriesThumb {
                position: relative;
                width: 100%;
                height: 70%;
            }
            
            .cardSeriesSubject {
                font-size: 1.5rem;
                line-height: 5vh;
                font-weight: bold;
            }
            
            .cardSeriesCount {
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

export default function Home() {
    const router = useRouter();

    const [seriesList, setSeriesList] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/series");
                setSeriesList(response?.data?.series);
            } catch (e) {
                console.log(e);
                return;
            }
        })();
    }, []);

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

            <div className="series">
                {
                    Object.keys(seriesList)?.map((v, i) => {
                        return (
                            <div className="cardSeries" key={i} onClick={e => {
                                e.preventDefault();

                                
                            }}>
                                <div className="cardSeriesThumb">
                                    {
                                        getLastPostThumb(seriesList[v].file)
                                    }
                                </div>
                                <div className="cardSeriesSubject">
                                    {v}
                                </div>

                                <div className="cardSeriesCount">
                                    {
                                        getLastPostDate(seriesList[v].file)
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Root>
    );
}
