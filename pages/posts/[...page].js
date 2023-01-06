import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import axios from "axios";
import {marked} from "marked";
import Prism from "prismjs";
import matter from "gray-matter";

const Root = styled.div`
    img {
      width: 100%;
    }  
    
`;

const PostsTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;

const PostsDate = styled.div`
    font-size: 0.5rem;
    opacity: 0.5;
`;

const HrTag = styled.hr`
    height: 3px;
    border: 0;
    //background: linear-gradient(#fff ,rgba(0,86,102,0.5));
    background: linear-gradient(to right, rgba(0,86,102,0), rgba(0,86,102,0.7), rgba(0,86,102,0));
`;

const titleConverter = (page) => {
    if (!page) {
        return;
    }
    const arr = page.toString().split(",");
    const titleTemp = arr[arr.length-1];
    const title = titleTemp.split(".md")[0].replace(/\_/g,' ');

    return title;
};

export default function Home() {
    const router = useRouter();
    const {page} = router.query;
    const title = titleConverter(page)
    const [htmlContent, setHtmlContent] = useState();
    const [createDate, setCreateDate] = useState("");
    const [modifyDate, setModifyDate] = useState("");
    const [frontMatter, setFrontMatter] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/markdown", {params: page});

                setHtmlContent(response?.data?.markdownContent);
                setCreateDate(response?.data?.createDate);
                setModifyDate(response?.data?.modifyDate);
                setFrontMatter(response?.data?.frontMatter);

            } catch (e) {
                console.log(e);
                return;
            }
        })();
    }, [router]);

    return (
        <Root>
            <PostsTitle>
                {title}
            </PostsTitle>
            <PostsDate>
            작성 : {createDate} <br/>
            수정 : {modifyDate}
            </PostsDate>
            <HrTag/>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
        </Root>
    )
};
