import styled from "styled-components";
import React from "react";
import {OpacityZeroToOne, OpacityTime} from "./elements/Animation";

const Root = styled.div`
    animation: ${OpacityZeroToOne} ${OpacityTime};
    
`;

const Knowledge =
({
    visible,
    setVisible
}) => {

    return (
        <Root style={{display: visible ? "block" : "none"}}>
            Knowledge
        </Root>
    );
}

export default Knowledge;