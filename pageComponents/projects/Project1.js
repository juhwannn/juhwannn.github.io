import styled from "styled-components";
import React from "react";

const Root = styled.div`
    
`;

const project1 = ({
    visible,
    setVisible
}) => {

    return (
        <Root style={{display: visible ? "block" : "none"}}>
            111111
        </Root>
    );
}

export default project1;