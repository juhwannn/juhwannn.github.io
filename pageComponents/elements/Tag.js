import React from "react";
import styled from "styled-components";

const Root = styled.div`
    line-height: initial;
    background-color: ${v => (v.bgColor)};
    display: inline-block;
    
    border: #0070f3 none;
    border-radius: 3px;
    
    box-shadow: 2px 2px 2px 2px white;
    
    margin-right: 5px;
    padding: 1px 3px 1px 3px;
    
    cursor: pointer;
    
    color: ${v => (v.fontColor)};
    
    >label {
        cursor: pointer;
    }
`;

export const Tag =
({
    children,
    bgColor,
    fontColor,
}) => {

    return (
        <Root bgColor={bgColor} fontColor={fontColor}>
            <label>
                {children}
            </label>
        </Root>
    );
};