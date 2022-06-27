import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import {Description, Header1, Header2} from "./elements/Header";
import {UnorderedList} from "./elements/UnorderedList";
import {Tag} from "./elements/Tag";
import {BsFillPersonFill} from "react-icons/Bs";
import {FaRegBuilding} from "react-icons/Fa";
import {RiTeamFill} from "react-icons/Ri";
import {FadeIn, FadeTime} from "./elements/Animation";
import {GithubIoModal} from "./modals/GithubIoModal";
import {UpbitTradingModal} from "./modals/UpbitTradingModal";
import {MyChatBotModal} from "./modals/MyChatBotModal";
import {DringdringModal} from "./modals/DringdringModal";
import {CloudMCityModal} from "./modals/CloudMCityModal";
import {SecuritySolutionModal} from "./modals/SecuritySolutionModal";
import {AutomaticlottoModal} from "./modals/AutomaticlottoModal";
import {WebMusicModal} from "./modals/WebMusicModal";

const Root = styled.div`
    animation: ${FadeIn} ${FadeTime};
    
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
    const [githubIoPopup, setGithubIoPopup] = useState(false);
    const [upbitTradingPopup, setUpbitTradingPopup] = useState(false);
    const [automaticLottoPopup, setAutomaticLottoPopup] = useState(false);
    const [webMusicPopup, setWebMusicPopup] = useState(false);
    const [myChatBotPopup, setMyChatbotPopup] = useState(false);
    const [dringdringPopup, setDringDringPopup] = useState(false);
    const [cloudMCityPopup, setCloudMCityPopup] = useState(false);
    const [securitySolutionPopup, setSecuritySolutionPopup] = useState(false);

    return (
        <Root style={{display: visible ? "block" : "none"}}>
            <Header1>
                <BsFillPersonFill/>
                personal
            </Header1>

            <UnorderedList onClick={e => {
                setGithubIoPopup(true);
            }}>
                <Header2>
                    🚀 Github.io
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Description>
                    깃허브 블로그 입니다.
                </Description>
            </UnorderedList>

            <UnorderedList onClick={e => {
                setUpbitTradingPopup(true);
            }}>
                <Header2>
                    🧨 upbittrading
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Description>
                    코인 자동 매수 매도 싸이트입니다.
                </Description>
            </UnorderedList>

            <UnorderedList onClick={e => {
                setAutomaticLottoPopup(true);
            }}>
                <Header2>
                    🗼 automatic-lotto
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Description>
                    복권 자동구매 싸이트입니다.
                </Description>
            </UnorderedList>

            <UnorderedList onClick={e => {
                setWebMusicPopup(true);
            }}>
                <Header2>
                    🎵 WebMusic
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>

                <Description>
                    웹 페이지에서 작곡 하는 사이트 입니다.
                </Description>
            </UnorderedList>

            <hr/>

            <Header1>
                <RiTeamFill/>
                team
            </Header1>

            <UnorderedList onClick={e => {
                setMyChatbotPopup(true);
            }}>
                <Header2>
                    🚃 mychatbot
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Description>
                    mychatbot
                </Description>
            </UnorderedList>

            <UnorderedList>
                <Header2>
                    🎖️ twitch_miner
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>

                <br/>
                <br/>
                <Description>
                    twitch_miner
                </Description>
            </UnorderedList>

            <hr/>

            <Header1>
                <FaRegBuilding/>
                company
            </Header1>

            <UnorderedList onClick={e => {
                setDringDringPopup(true);
            }}>
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

                <Description>
                    주류 배달 서비스 관리자페이지 개발에 직접 참여하였습니다. React를 사용한 프론트엔드 구축을, Node.js 를 사용한 백엔드 api 개발을 맡았습니다.
                </Description>
            </UnorderedList>

            <UnorderedList onClick={e => {
                setCloudMCityPopup(true);
            }}>
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

                <Description>
                    외부 api 를 사용해 가상머신과 Restful api 통신으로 클라우드 서비스를 제공하는 next.js를 사용한 프론트엔드 구축을, express를 사용한 백엔드 api 개발을 맡았습니다.
                </Description>
            </UnorderedList>

            <UnorderedList onClick={e => {
                setSecuritySolutionPopup(true);
            }}>
                <Header2>
                    🥝 보안솔루션
                </Header2>

                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Java</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>JavaScript</Tag>
                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>SpringFramework</Tag>

                <br/>
                <br/>

                <Description>
                    자사 서비스인 보안솔루션은 splunk, elastic 과 연동하여 짜놓은 시나리오에 탐지된 티켓들을 모니터링하는 서비스입니다.
                </Description>
            </UnorderedList>

            <GithubIoModal visible={githubIoPopup} setVisible={setGithubIoPopup}/>
            <UpbitTradingModal visible={upbitTradingPopup} setVisible={setUpbitTradingPopup}/>
            <AutomaticlottoModal visible={automaticLottoPopup} setVisible={setAutomaticLottoPopup}/>
            <WebMusicModal visible={webMusicPopup} setVisible={setWebMusicPopup}/>
            <MyChatBotModal visible={myChatBotPopup} setVisible={setMyChatbotPopup}/>
            <DringdringModal visible={dringdringPopup} setVisible={setDringDringPopup}/>
            <CloudMCityModal visible={cloudMCityPopup} setVisible={setCloudMCityPopup}/>
            <SecuritySolutionModal visible={securitySolutionPopup} setVisible={setSecuritySolutionPopup}/>
        </Root>
    );
};

export default Project;