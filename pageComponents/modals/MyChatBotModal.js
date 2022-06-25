import styled from "styled-components";
import React from "react";
import {CustomModal} from "../elements/CustomModal";

const Root = styled.div`
`;

export const MyChatBotModal = ({
    visible,
    setVisible
                               }) => {

    return (
        <Root>
            <CustomModal visible={visible} setVisible={setVisible} title={"MyChatBot"}>
                asdf
            </CustomModal>
        </Root>
    )
}
