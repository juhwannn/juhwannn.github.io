import styled from "styled-components";
import React from "react";
import {CustomModal} from "../elements/CustomModal";

const Root = styled.div`
`;

export const DringdringModal = ({
    visible,
    setVisible
                                }) => {

    return (
        <Root>
            <CustomModal visible={visible} setVisible={setVisible} title={"DringDring"}>
                asdf
            </CustomModal>
        </Root>
    )
}
