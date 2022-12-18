import styled from "styled-components";
import React from "react";
import {CustomModal} from "../elements/CustomModal";
import {Tag} from "../elements/Tag";

const Root = styled.div`
    hr {
    
    }
    
    img {
       width: 100%;
       height: 100%;
    }
    
    .imageSlide {
        position: relative;
        >.images {
        }
    }
`;

export const GithubIoModal = ({
    visible,
    setVisible
                              }) => {

    return (
        <Root>
            <CustomModal visible={visible} setVisible={setVisible} title={"Github.Io"}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                개발 기간
                            </th>
                            <td>
                                2022. 05 ~
                            </td>
                        </tr>

                        <tr>
                            <th>
                                개발 언어
                            </th>
                            <td>
                                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Github Action</Tag>
                                <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>gh-pages</Tag>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                한줄 설명
                            </th>

                            <td>
                                깃허브 블로그 입니다.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <hr/>

                <div className="imageSlide">
                    <div className="images">
                        캐러셀로 변경 예정.
                        <img src="images/githubIo/GithubIo1.png"/>
                        <img src="images/githubIo/GithubIo2.png"/>
                        <img src="images/githubIo/GithubIo3.png"/>

                        {/*<span className="Prev">*/}
                        {/*    &lt;*/}
                        {/*</span>*/}

                        {/*<span className="Next">*/}
                        {/*    &gt;*/}
                        {/*</span>*/}
                    </div>

                    <div className="description">
                        {/*제 깃헙 블로그에 접속시 처음 보이게되는 초기 화면입니다.*/}
                    </div>
                </div>
            </CustomModal>
        </Root>
    );
}
