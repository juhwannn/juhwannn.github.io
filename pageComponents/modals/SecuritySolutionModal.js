import styled from "styled-components";
import React from "react";
import {CustomModal} from "../elements/CustomModal";

const Root = styled.div`
`;

export const SecuritySolutionModal = ({
    visible,
    setVisible
                                      }) => {

    return (
        <Root>
            <CustomModal visible={visible} setVisible={setVisible} title={"보안 솔루션"}>
                asdf
            </CustomModal>
        </Root>
    )
}
