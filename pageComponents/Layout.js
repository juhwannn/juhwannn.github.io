import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {LeftColor, RightColor} from "./elements/Color";

const Root = styled.div`
    background: linear-gradient(to right, ${LeftColor} 50%, ${RightColor} 50%);
    
    
    .body {
        height: 90vh;
        
        overflow: auto;
    }
    
    
`;

const Layout =
({
     children
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