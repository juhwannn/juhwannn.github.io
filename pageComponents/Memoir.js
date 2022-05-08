import styled from "styled-components";
import React from "react";
import {FadeIn, FadeTime} from "./elements/Animation";
import {Description, Header1, Header2, Header3} from "./elements/Header";
import {GiTalk} from "react-icons/Gi";
import {BsFillPersonFill} from "react-icons/bs";
import {RiTeamFill} from "react-icons/ri";
import {FaRegBuilding} from "react-icons/fa";
import {UnorderedList} from "./elements/UnorderedList";
import {DefaultContext} from "react-icons";

const Root = styled.div`
    animation: ${FadeIn} ${FadeTime};

    padding-left: 10vw;
    padding-right: 10vw;
    
    text-align: left;    
    
    >hr {
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
`;

const Memoir =
    ({
         visible,
         setVisible
    }) => {

        return (
            <Root style={{display: visible ? "block" : "none"}}>
                <Header1>
                    <GiTalk/>
                    회고록
                </Header1>

                <Header3>
                    프로젝트를 진행하면서 개인적으로 느꼈던 생각들을 정리하는 곳 입니다.
                </Header3>

                <hr/>

                <Header1>
                    <BsFillPersonFill/>
                    personal
                </Header1>

                <UnorderedList>
                    <Header2>
                        🚀 Github.io
                    </Header2>
                </UnorderedList>

                <UnorderedList>
                    <Header2>
                        🧨 upbittrading
                    </Header2>
                </UnorderedList>

                <UnorderedList>
                    <Header2>
                        🗼 automatic-lotto
                    </Header2>
                </UnorderedList>

                <hr/>

                <Header1>
                    <RiTeamFill/>
                    team
                </Header1>

                <UnorderedList>
                    <Header2>
                        🚃 mychatbot
                    </Header2>
                </UnorderedList>

                <UnorderedList>
                    <Header2>
                        🎖️ twitch_miner
                    </Header2>

                    <Description>
                        기반기술에 대해서 잘 모르는 팀원들과 remote로 협업이 가능할까? <br/>
                        답을 얻었다. 이 팀이라면 가능하다. <br/>
                        자발적으로 문제를 해결해 갈 수 있다면 remote 여부와 관계없이 문제해결이 가능하다.
                    </Description>
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
                </UnorderedList>

                <UnorderedList>
                    <Header2>
                        📝 CloudMCity
                    </Header2>
                </UnorderedList>

                <UnorderedList>
                    <Header2>
                        🥝 보안솔루션
                    </Header2>
                </UnorderedList>
            </Root>
        );
    }

export default Memoir;