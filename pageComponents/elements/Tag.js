import React from "react";
import styled from "styled-components";

const Root = styled.div`
    line-height: initial;
    background-color: ${v => (v.bgColor)};
    display: inline-block;
    
    border: #0070f3 none;
    border-radius: 3px;
    
    margin-right: 5px;
    padding: 1px 3px 1px 3px;
    
    cursor: pointer;
    
    color: ${v => (v.fontColor)}; 
`;

export const Tag =
({
    text,
    bgColor,
    fontColor,
}) => {

    return (
        <Root bgColor={bgColor} fontColor={fontColor}>
            {text}
        </Root>
    );
};