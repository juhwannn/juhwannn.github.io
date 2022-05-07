import styled from "styled-components";
import React from "react";
import {LeftColor, RightColor} from "./Color";

const Root = styled.ul`
    padding-left: 3vw;
    padding-right: 2vw;
    padding-bottom: 2vh;
    
    display: inline-block;
    
    color: ${RightColor};
    background: ${LeftColor};
    
    border-radius: 5px;
    
    width: 100%;
    height: auto;
    
    li {
        list-style-type: square;
        
        margin-top: 1vh;
    }
`;

export const UnorderedList =
({
    children
}) => {

    return (
        <Root>
            {children}
        </Root>
    );
}