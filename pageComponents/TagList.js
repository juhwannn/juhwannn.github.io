import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Root = styled.div`
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
`;

const sumTagCount = (tagList) => {
    let sum = 0;

    for (const value of Object.values(tagList)) {
        sum += value
    }

    return sum;
}

const RenderTagList = (value) => {
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

const TagList = ({tagList}) => {

    return (
        <Root>
            <div>
            {
                RenderTagList(tagList)
            }
            </div>
        </Root>
    );
}

export default TagList;
