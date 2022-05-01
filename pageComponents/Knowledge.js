import styled from "styled-components";
import React from "react";

const Root = styled.div`

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