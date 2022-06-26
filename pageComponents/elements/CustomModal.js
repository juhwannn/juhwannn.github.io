import styled from "styled-components";
import React, {useEffect} from "react";
import {FadeIn, FadeOut, FadeTime, PopupFadeTime} from "./Animation";

const Root = styled.div`
    transition: display;
    display: ${props => props.visible ? "block" : "none"}; 
    animation: ${props => props.visible ? FadeIn : FadeOut} ${PopupFadeTime};
    
    >.background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000;
        opacity: 0.5;
    }
    
    >.popup {
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -25vw;
        margin-top: -30vh;
        
        >.title {
            width: 45vw;
            background-color: #121212;
            color: #fff;
            padding: 20px;
            
            >.close {
                float: right;
                cursor: pointer;            
            }        
        }
        
        >.content {
            width: 45vw;
            max-height: 55vh;
            background-color: #fff;
            padding: 30px 40px;
            overflow-y: auto;        
            color: #121212;
        }
    }
`;

const popupClosingHandle = (setVisible) => ignore => {

    setVisible(false);
}

export const CustomModal =
({
    visible,
    setVisible,
    title,
    children,
}) => {

    return (
        <Root visible={visible}>
            <div className="background" onClick={popupClosingHandle(setVisible)}/>
            <div className="popup">
                <div className="title">
                    {title}
                    <span className={'close'}
                          onClick={popupClosingHandle(setVisible)}>X</span>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </Root>
    );
}