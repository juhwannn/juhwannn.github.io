import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import {Description, Header1, Header2} from "./elements/Header";
import {UnorderedList} from "./elements/UnorderedList";
import {Tag} from "./elements/Tag";
import {BsFillPersonFill} from "react-icons/Bs";
import {RiTeamFill} from "react-icons/Ri";
import {FadeIn, FadeTime} from "./elements/Animation";
import {GithubIoModal} from "./modals/GithubIoModal";
import {UpbitTradingModal} from "./modals/UpbitTradingModal";
import {MyChatBotModal} from "./modals/MyChatBotModal";
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

            <GithubIoModal visible={githubIoPopup} setVisible={setGithubIoPopup}/>
            <UpbitTradingModal visible={upbitTradingPopup} setVisible={setUpbitTradingPopup}/>
            <AutomaticlottoModal visible={automaticLottoPopup} setVisible={setAutomaticLottoPopup}/>
            <WebMusicModal visible={webMusicPopup} setVisible={setWebMusicPopup}/>
            <MyChatBotModal visible={myChatBotPopup} setVisible={setMyChatbotPopup}/>
        </Root>
    );
};

export default Project;