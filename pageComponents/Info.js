import styled from "styled-components";
import React from "react";

const Root = styled.div`

`;

const Info =
({
    visible,
    setVisible
}) => {

    return (
        <Root style={{display: visible ? "block" : "none"}}>
            Info.js
        </Root>
    )
};

export default Info;