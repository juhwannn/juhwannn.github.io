import React from "react";
import styled from "styled-components";
import {Decryption, Header1, Header2} from "./elements/Header";
import {GoProject} from "react-icons/Go";
import {UnorderedList} from "./elements/UnorderedList";
import {Tag} from "./elements/Tag";

const Root = styled.div`
    svg {
        vertical-align: bottom;
    }
    text-align: left;
    
    padding-left: 10vw;
    padding-right: 10vw;
    
    overflow: hidden;
    
    >hr {
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
`;


const Project =
({
    visible,
    setVisible
}) => {

    return (
        <Root style={{display: visible ? "block" : "none"}}>
            <Header1>
                <GoProject/>
                project list
            </Header1>

            <UnorderedList>
                <Header2>
                    🚛 dringdring
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>React.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Node.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Express.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>AWS S3</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Docker</Tag>

                <br/>
                <br/>

                <Decryption>
                    주류 배달 서비스 관리자페이지 개발에 직접 참여하였습니다. React를 사용한 프론트엔드 구축을, Node.js 를 사용한 백엔드 api 개발을 맡았습니다.
                </Decryption>
            </UnorderedList>

            <UnorderedList>
                <Header2>
                    📝 CloudMCity
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>React.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Express.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>MySQL</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Docker</Tag>

                <br/>
                <br/>

                <Decryption>
                    외부 api 를 사용해 가상머신과 Restful api 통신으로 클라우드 서비스를 제공하는 next.js를 사용한 프론트엔드 구축을, express를 사용한 백엔드 api 개발을 맡았습니다.
                </Decryption>
            </UnorderedList>

            <UnorderedList>
                <Header2>
                    🥝 보안솔루션
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Java</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>JavaScript</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>SpringFramework</Tag>

                <br/>
                <br/>

                <Decryption>
                    자사 서비스인 보안솔루션은 splunk, elastic 과 연동하여 짜놓은 시나리오에 탐지된 티켓들을 모니터링하는 서비스입니다.
                </Decryption>
            </UnorderedList>
        </Root>
    );
};

export default Project;