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


            {/*# 웹서버와 서블릿 컨테이너 동작 원리*/}

            {/*# 자바 빈*/}

            {/*# 미들웨어*/}

            {/*# 결합의존도*/}

            {/*# 서비스의존도*/}

            {/*# message queue*/}

            {/*# quartz*/}

            {/*# internal api*/}

            {/*# yaml*/}

            {/*# typescript*/}

            {/*# 라이브러리와 API 차이*/}

            {/*# 디자인 패턴*/}

            {/*# 맥북에 jenkins 설치*/}

            {/*# express.js middleware 수행 규칙*/}

            {/*# express.js가 Next.js 로 요청을 위임하는 방법*/}

            {/*# SPA, SSR, CSR*/}

            {/*# 커밋 컨벤션*/}

            {/*# SAGA*/}

            {/*# SEO 최적화 ?*/}

            {/*# **document is not defined 에러 (ReactQuill 있는 페이지에서 리로딩시 에러)***/}

            {/*# DDD*/}

            {/*# Clean **Architecture***/}

            {/*# Event Driven MicroService *****/}

            {/*# LAMDA*/}

            {/*# React*/}

            {/*# [vercel.app](http://vercel.app) (블로그 ?)*/}
        </Root>
    );
}

export default Knowledge;