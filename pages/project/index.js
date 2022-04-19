import React, {useState} from "react";
import {LeftBody, RightBody} from "../../pageComponents/Body";
import {Card} from "../../pageComponents/CardComponents";
import styled from "styled-components";
import {RightColor, LeftColor} from "../../pageComponents/elements/Color";

const Root = styled.div`
    .tableOfContents {
        font-size: 20px;
        font-weight: bold;
        
        color: ${RightColor};
        
        margin-top: 40px;
        margin-bottom: 40px;
    }
    
    .projectCardList {
        position: relative;
        
        padding: 10px;
        
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        
        .card {
            flex: 1;
        }
    }
`;

export default function Home() {

    const companyProject = [
        {
            cardSubject: "보안 솔루션",
            devPeriod: "2020 ~ 2022",
            tags: [
                {
                    tagText: "JAVA",
                    tagColor: "black",
                    fontColor: "white"
                },
                {
                    tagText: "C++",
                    tagColor: "red",
                    fontColor: "white"
                },
                {
                    tagText: "Spring",
                    tagColor: "blue",
                    fontColor: "white"
                },
                {
                    tagText: "React",
                    tagColor: "white",
                    fontColor: "black"
                },
            ],
        },
        {
            cardSubject: "보안 솔루션",
            devPeriod: "2020 ~ 2022",
            tags: [
                {
                    tagText: "JAVA",
                    tagColor: "black",
                    fontColor: "white"
                },
                {
                    tagText: "C++",
                    tagColor: "red",
                    fontColor: "white"
                },
                {
                    tagText: "Spring",
                    tagColor: "blue",
                    fontColor: "white"
                },
                {
                    tagText: "React",
                    tagColor: "white",
                    fontColor: "black"
                },
            ],
        }
    ];

    const personalProject = [
        {
            cardSubject: "upbittrading",
            devPeriod: "2022 ~ 2022",
            tags: [
                {
                    tagText: "JAVA",
                    tagColor: "black",
                    fontColor: "white"
                },
                {
                    tagText: "C++",
                    tagColor: "red",
                    fontColor: "white"
                },
                {
                    tagText: "Spring",
                    tagColor: "blue",
                    fontColor: "white"
                },
                {
                    tagText: "React",
                    tagColor: "white",
                    fontColor: "black"
                },
            ],
        },
        {
            cardSubject: "juhwannn.github.io",
            devPeriod: "2022 ~ ",
            tags: [
                {
                    tagText: "Next.js",
                    tagColor: "black",
                    fontColor: "white"
                },
                {
                    tagText: "express",
                    tagColor: "red",
                    fontColor: "white"
                },
                {
                    tagText: "Spring",
                    tagColor: "blue",
                    fontColor: "white"
                },
                {
                    tagText: "React",
                    tagColor: "white",
                    fontColor: "black"
                },
            ],
        }
    ];

    const teamProject = [
        {
            cardSubject: "보안 솔루션",
            devPeriod: "2020 ~ 2022",
            tags: [
                {
                    tagText: "JAVA",
                    tagColor: "black",
                    fontColor: "white"
                },
                {
                    tagText: "C++",
                    tagColor: "red",
                    fontColor: "white"
                },
                {
                    tagText: "Spring",
                    tagColor: "blue",
                    fontColor: "white"
                },
                {
                    tagText: "React",
                    tagColor: "white",
                    fontColor: "black"
                },
            ],
        }
    ];

    const [floatNum, setFloatNum] = useState(0);

    return (
        <Root>
            <div className="body">
                <LeftBody style={{background: "red"}}>
                    <div className="tableOfContents">
                        LIST
                    </div>

                    <div className="projectCardList">
                        {
                            floatNum % 2 === 1 ? (
                                companyProject.map(( v, i ) => (
                                    <Card key={i} cardSubject={v.cardSubject} devPeriod={v.devPeriod} tags={v.tags} Click={e => {
                                        alert('ab');
                                    }} float={"left"}/>
                                ))
                            ) : (
                                companyProject.map(( v, i ) => (
                                    <Card key={i} cardSubject={v.cardSubject} devPeriod={v.devPeriod} tags={v.tags} Click={e => {
                                        alert('ab');
                                    }} float={"right"}/>
                                ))
                            )

                        }
                    </div>

                    <div className="tableOfContents">
                        개인 프로젝트
                    </div>

                    {
                        personalProject.map(( v, i ) => (
                            <Card key={i} cardSubject={v.cardSubject} devPeriod={v.devPeriod} tags={v.tags}/>
                        ))
                    }

                    <div className="tableOfContents">
                        팀 프로젝트
                    </div>

                    {
                        teamProject.map(( v, i ) => (
                            <Card key={i} cardSubject={v.cardSubject} devPeriod={v.devPeriod} tags={v.tags}/>
                        ))
                    }

                </LeftBody>

                <RightBody>
                    bbbb
                </RightBody>
            </div>
        </Root>
    );
}