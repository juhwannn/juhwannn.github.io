import styled from "styled-components";
import React from "react";
import {FadeIn, FadeTime} from "./elements/Animation";
import {Description, Header1, Header2, Header3} from "./elements/Header";

const Root = styled.div`
    animation: ${FadeIn} ${FadeTime};

    padding-left: 10vw;
    padding-right: 10vw;
        
    text-align: left;
`;

const Knowledge =
({
    visible,
    setVisible
}) => {

    return (
        <Root style={{display: visible ? "block" : "none"}}>

            <Header1>
                *기술블로그로 이전 예정*
            </Header1>
        </Root>
    );
}

export default Knowledge;