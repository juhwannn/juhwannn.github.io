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
    
    .leftContent {
        display: table-cell;
        vertical-align: middle;
        
        text-align: center;
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
    
    .rightContent {
        display: table-cell;
        vertical-align: middle;
        
        text-align: center;
    }
`;
export const LeftBody = ({children}) => {

    return (
        <LeftRoot>
            <div className="leftContent">
                {children}
            </div>
        </LeftRoot>
    )
};

export const RightBody = ({children}) => {
    return (
        <RightRoot>
            <div className="rightContent">
                {children}
            </div>
        </RightRoot>
    );
};