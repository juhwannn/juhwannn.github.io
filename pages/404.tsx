import React from "react";
import styled from "styled-components";
import {LeftColor, RightColor} from "../pageComponents/elements/Color";
import {LeftBody, RightBody} from "../pageComponents/Body";

const Root = styled.div`
    
    .leftText {
        font-size: 20px;
        font-weight: bold;
        
        color: ${RightColor};
    }
    
    .rightText {
        font-size: 20px;
        font-weight: bold;
        
        color: ${LeftColor};
    }
`;
export default function Home() {

    return (
        <Root>
            <div className="body">
                <LeftBody>
                    <span className="leftText">
                        404 ERROR
                    </span>
                </LeftBody>

                <RightBody>
                    <span className="rightText">
                        페이지를 찾을 수 없습니다.
                    </span>
                </RightBody>
            </div>
        </Root>
    );
};