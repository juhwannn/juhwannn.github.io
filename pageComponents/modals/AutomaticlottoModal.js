import styled from "styled-components";
import React from "react";
import {Tag} from "../elements/Tag";
import {CustomModal} from "../elements/CustomModal";

const Root = styled.div`

`;

export const AutomaticlottoModal = ({
    visible,
    setVisible,
                                    }) => {

    return (
        <Root>
            <CustomModal visible={visible} setVisible={setVisible} title={"UpbitTrading"}>
                <table>
                    <tbody>
                    <tr>
                        <th>
                            개발 기간
                        </th>
                        <td>
                            2022. 04 ~
                        </td>
                    </tr>

                    <tr>
                        <th>
                            개발 언어
                        </th>
                        <td>
                            <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Next.js</Tag>
                            <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>express.js</Tag>
                            <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Headless Chrome</Tag>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            한줄 설명
                        </th>

                        <td>
                            복권 자동구매 싸이트입니다.
                        </td>
                    </tr>
                    </tbody>
                </table>

                <hr/>

            </CustomModal>
        </Root>
    );
}