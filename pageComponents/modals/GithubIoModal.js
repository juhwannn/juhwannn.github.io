import styled from "styled-components";
import React from "react";
import {CustomModal} from "../elements/CustomModal";

const Root = styled.div`

`;

export const GithubIoModal = ({
    visible,
    setVisible
                              }) => {

    return (
        <Root>
            <CustomModal visible={visible} setVisible={setVisible} title={"Github.Io"}>
                <p>
                    개발기간 : 2022. 05 ~ <br/>
                    개발인원 : 1명 <br/>
                    역할 : <br/>
                    개발 언어 : <br/>
                    한줄설명 : <br/>
                    프로젝트 이미지 <br/>
                </p>
            </CustomModal>
        </Root>
    );
}
