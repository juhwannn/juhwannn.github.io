import styled from "styled-components";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {marked} from "marked";
import Prism from "prismjs";

const Root = styled.div`
    img {
      width: 100%;
    }
`;


export default function Home() {
    const [htmlContent, setHtmlContent] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/markdown");

                setHtmlContent(response?.data?.result);
            } catch (e) {
                console.log(e);
                return;
            }
        })();
    }, []);

    return (
        <Root>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
        </Root>
    )
}
