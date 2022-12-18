import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {LeftColor, RightColor} from "./elements/Color";

const Root = styled.div`
    .body {
        height: 100vh;
        
        overflow: auto;
    }
`;

const Layout = ({
    children,
}) => {

    return (
        <Root>
            <div className="body">
                {children}
            </div>
        </Root>
    );
}

export default Layout;
