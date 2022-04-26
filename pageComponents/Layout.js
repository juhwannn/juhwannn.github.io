import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Transition from "./Transition";
import styled from "styled-components";
import {LeftColor, RightColor} from "./elements/Color";

const Root = styled.div`
    background: linear-gradient(to right, ${LeftColor} 50%, ${RightColor} 50%);
    
    .header {
        height: 5vh;
        
        .leftHeader {
            float: left;
            
            width: 50%;
            height: 100%;
                        
            font-weight: bold;
            color: ${RightColor};
            
            padding-left: 30px;
            padding-top: 30px;
        }
        
        .rightHeader {
            float: right;
            text-align: right;
            
            width: 50%;
            height: 100%;
            
            font-weight: bold;
            color: ${LeftColor};
            
            padding-right: 30px;
            padding-top: 30px;
        }
    }
    .header::after {
        display: block;
        content: "";
        clear: both;
    }
    
    .body {
        height: 90vh;
        
        overflow: auto;
    }
    
    .footer {
        height: 5vh;
        .leftFooter {
            float: left;
            
            font-size: 10px;
            font-weight: lighter;
            text-align: center;
            
            width: 50%;
            height: 100%;
            
            
        }
        
        .rightFooter {
            float: right;
            
            font-size: 10px;
            font-weight: lighter;
            text-align: center;
            
            width: 50%;
            height: 100%;
        }
    }
    .footer::after {
        display: block;
        content: "";
        clear: both;
    }
`;

function MenuFactory(path, menuName, setMenuName) {

    setMenuName("ERROR");

    if (path === "/") {
        setMenuName("홈");
    }

    if (path === "/info") {
        setMenuName("정보");
    }

    if (path === "/project") {
        setMenuName("프로젝트");
    }
};

const Layout =
({
     children
}) => {

    const [menuName, setMenuName] = useState("");

    const router = useRouter();

    useEffect(() => {
        MenuFactory(router.pathname, menuName, setMenuName);
    }, [router.pathname]);

    return (
            <Transition
                location={router.pathname}
            >
                <Root>
                    <div className="header">
                        <div className="leftHeader">
                            안주환 &nbsp;|&nbsp; 개발자
                        </div>

                        <div className="rightHeader">
                            {menuName}
                        </div>
                    </div>

                    <div className="body">
                        {children}
                    </div>

                    <div className="footer">
                        <div className="footer">
                            <label>
                                <div className="leftFooter">

                                </div>
                            </label>

                            <label>
                                <div className="rightFooter">
                                    Copyright 2022. juhwannn all rights reserved.
                                </div>
                            </label>
                        </div>
                    </div>
                </Root>
            </Transition>
    );
}

export default Layout;