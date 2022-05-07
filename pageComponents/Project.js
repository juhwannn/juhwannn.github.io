import React from "react";
import styled, {keyframes} from "styled-components";
import {Decryption, Header1, Header2} from "./elements/Header";
import {GoProject} from "react-icons/Go";
import {UnorderedList} from "./elements/UnorderedList";
import {Tag} from "./elements/Tag";
import {BsFillPersonFill} from "react-icons/Bs";
import {FaRegBuilding} from "react-icons/Fa";
import {RiTeamFill} from "react-icons/Ri";
import {OpacityZeroToOne, OpacityTime} from "./elements/Animation";

const Root = styled.div`
    animation: ${OpacityZeroToOne} ${OpacityTime};
    
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
                <BsFillPersonFill/>
                personal
            </Header1>

            <UnorderedList>
                <Header2>
                    🚀 Github.io
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Decryption>
                    깃헙 블로그입니다.
                </Decryption>
            </UnorderedList>

            <UnorderedList>
                <Header2>
                    🧨 upbittrading
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Decryption>
                    upbittrading
                </Decryption>
            </UnorderedList>

            <UnorderedList>
                <Header2>
                    🗼 automatic-lotto
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Decryption>
                    automatic-lotto
                </Decryption>
            </UnorderedList>

            <UnorderedList>
                <Header2>
                    🚃 mychatbot
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Decryption>
                    mychatbot
                </Decryption>
            </UnorderedList>

            <hr/>

            <Header1>
                <RiTeamFill/>
                team
            </Header1>

            <UnorderedList>
                <Header2>
                    🎖️ twitch_miner
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Decryption>
                    twitch_miner
                </Decryption>
            </UnorderedList>

            <hr/>

            <Header1>
                <FaRegBuilding/>
                company
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