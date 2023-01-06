import styled from "styled-components";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {marked} from "marked";
import Prism from "prismjs";
import {UnorderedList} from "../pageComponents/elements/UnorderedList";
import {Description, Header2} from "../pageComponents/elements/Header";
import Image from "next/image";

const Root = styled.div`
    img {
      width: 100%;
    }
`;

const Card = styled.div`
    background: grey;
    height: 25vh;
    
    margin-bottom: 5vh;
`;


export default function Home() {
    const [latelyPosts, setLatelyPosts] = useState([]);

    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get("/api/latelyPosts");

                setLatelyPosts(response?.data?.latelyPosts.files);
            } catch (e) {
                alert(e);
                return;
            }
        })();
    }, []);

    return (
        <Root>
            {
                latelyPosts.map((v, i) => {
                    return (
                        <Card key={i}>
                            <div className="cardFileName">
                                {v?.fileName}
                            </div>

                            <div className="cardCreateDate">
                                작성 : {v?.createDate}
                            </div>

                            <div className="cardModifyDate">
                                수정 : {v?.modifyDate}
                            </div>

                            <div className="cardMatterSummary">
                                {v?.matters?.summary}
                            </div>

                            <div className="cardMatterTag">
                                {
                                    v?.matters?.tags?.map((tag, index) => {
                                        return (
                                            <div className="cardMatterTags" key={index}>
                                                {tag}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="cardMatterThumb">
                                {/*<Image src={`/images/devlogThumb/${v?.matters?.thumb}`} layout="fill" alt="thumb nail"/>*/}
                            </div>

                        </Card>
                    )
                })
            }
        </Root>
    )
}
