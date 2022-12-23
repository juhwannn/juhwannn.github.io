import styled from "styled-components";
import React from "react";
import {LeftColor, RightColor} from "./Color";
import {Props} from "next/script";

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
    
    cursor: pointer;
    
    li {
        list-style-type: square;
        
        margin-top: 1vh;
    }
    
    &:hover {
        transition: box-shadow 0.3s;
        box-shadow: 8px 8px 8px 8px rgba(12, 12, 12, 0.2); 
    }
`;

export const UnorderedList =
({
    children,
    onClick
}: Props) => {

    return (
        <Root onClick={onClick}>
            {children}
        </Root>
    );
}
