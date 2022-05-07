import styled from "styled-components";
import React from "react";
import {FadeIn, OpacityTime} from "./elements/Animation";

const Root = styled.div`
    animation: ${FadeIn} ${OpacityTime};
    
`;

const Memoir =
    ({
         visible,
         setVisible
     }) => {

        return (
            <Root style={{display: visible ? "block" : "none"}}>
                Memoir
            </Root>
        );
    }

export default Memoir;