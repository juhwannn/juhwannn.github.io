import styled from "styled-components";
import React from "react";
import {OpacityZeroToOne, OpacityZeroToOneTime} from "./elements/Animation";

const Root = styled.div`
    animation: ${OpacityZeroToOne} ${OpacityZeroToOneTime};
    
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