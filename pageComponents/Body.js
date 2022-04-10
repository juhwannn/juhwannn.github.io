import styled from "styled-components";
import React from "react";

const LeftRoot = styled.div`
    float: left;
    
    width: 50%;
    height: 100%;
    text-align: center;
    margin: auto;
    
    display: table;
    
    &:after {
        display: block;
        content: "";
        clear: both;
    }
`;

const RightRoot = styled.div`
    float: right;
            
    width: 50%;
    height: 100%;
    
    text-align: center;
    
    display: table;
    
    &:after {
        display: block;
        content: "";
        clear: both;
    }
`;
export const LeftBody = ({children}) => {

    return (
        <LeftRoot>
            {children}
        </LeftRoot>
    )
};

export const RightBody = ({children}) => {
    return (
        <RightRoot>
            {children}
        </RightRoot>
    );
};