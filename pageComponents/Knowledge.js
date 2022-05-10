import styled from "styled-components";
import React from "react";
import {FadeIn, FadeTime} from "./elements/Animation";
import {Description, Header1, Header2, Header3} from "./elements/Header";
import {BsFront, BsBack} from "react-icons/Bs";
import {FiDatabase} from "react-icons/Fi";
import {GrIntegration, GrServerCluster} from "react-icons/Gr";
import {VscVersions} from "react-icons/Vsc";
import {UnorderedList} from "./elements/UnorderedList";
import {LeftColor} from "./elements/Color";

const Root = styled.div`
    animation: ${FadeIn} ${FadeTime};

    padding-left: 10vw;
    padding-right: 10vw;
        
    text-align: left;
`;

const Knowledge =
({
    visible,
    setVisible
}) => {

    return (
        <Root style={{display: visible ? "block" : "none"}}>

            <Header1>
                *기술블로그로 이전 예정*
            </Header1>
            {/*<Header1>*/}
            {/*    <BsFront/>*/}
            {/*    Frontend*/}
            {/*</Header1>*/}

            {/*<Header1>*/}
            {/*    <BsBack/>*/}
            {/*    Backend*/}
            {/*</Header1>*/}

            {/*<Header1>*/}
            {/*    <GrIntegration/>*/}
            {/*    Ci/CD*/}
            {/*</Header1>*/}

            {/*<Header1>*/}
            {/*    <VscVersions/>*/}
            {/*    VCS*/}
            {/*</Header1>*/}

            {/*<Header1>*/}
            {/*    <FiDatabase/>*/}
            {/*    Database*/}
            {/*</Header1>*/}

            {/*<Header1>*/}
            {/*    <GrServerCluster/>*/}
            {/*    Server*/}
            {/*</Header1>*/}
        </Root>
    );
}

export default Knowledge;