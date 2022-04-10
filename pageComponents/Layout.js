import {useRouter} from "next/router";
import React from "react";
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
                        
            color: ${RightColor};
            
            padding-left: 30px;
            padding-top: 30px;
        }
        
        .rightHeader {
            float: right;
            text-align: right;
            
            width: 50%;
            height: 100%;
            
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
            
            width: 50%;
            height: 100%;
        }
        
        .rightFooter {
            float: right;
            
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

const Layout =
({
     children
}) => {

    const router = useRouter();

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
                            홈
                        </div>
                    </div>

                    <div className="body">
                        {children}
                    </div>

                    <div className="footer">
                        <div className="footer">
                            <div className="leftFooter">
                                leftFooter
                            </div>

                            <div className="rightFooter">
                                rightFooter
                            </div>
                        </div>
                    </div>
                </Root>
            </Transition>
    );
}

export default Layout;