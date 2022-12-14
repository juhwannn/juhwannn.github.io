import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import axios from "axios";
import {marked} from "marked";
import Prism from "prismjs";

const Root = styled.div`
    img {
      width: 100%;
    }  
    
`;

const titleConverter = (page) => {
    console.log(page.toString().split(","));
    // const fileSubject = page.split(".md")[0].replace(/\_/g,' ');

    // return fileSubject;
};

export default function Home() {
    const router = useRouter();
    const {page} = router.query;
    const title = titleConverter(page)
    const [htmlContent, setHtmlContent] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/markdown", {params: page});

                setHtmlContent(response?.data?.result);
            } catch (e) {
                console.log(e);
                return;
            }
        })();
    }, [router]);
    console.log("page : " + page);

    return (
        <Root>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
        </Root>
    )
};
