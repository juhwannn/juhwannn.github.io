import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import axios from "axios";

const Root = styled.div`
    img {
      width: 100%;
    }  
    
`;

export default function Home() {
    const router = useRouter();
    const {page} = router.query;

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
    return (
        <Root>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
        </Root>
    )
};
