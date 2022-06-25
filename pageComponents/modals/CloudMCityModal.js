import styled from "styled-components";
import React from "react";
import {CustomModal} from "../elements/CustomModal";

const Root = styled.div`
`;

export const CloudMCityModal = ({
    visible,
    setVisible
                                }) => {

    return (
        <Root>
            <CustomModal visible={visible} setVisible={setVisible} title={"CloudMCity"}>
                asdf
            </CustomModal>
        </Root>
    )
}
