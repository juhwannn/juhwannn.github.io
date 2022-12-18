import styled from "styled-components";
import React from "react";
import {CustomModal} from "../elements/CustomModal";
import {Tag} from "../elements/Tag";

const Root = styled.div`
`;

export const UpbitTradingModal = ({
    visible,
    setVisible
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
                            <Tag bgColor={"#EDEDEB"} fontColor={"#DB635E"}>Upbit API</Tag>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            한줄 설명
                        </th>

                        <td>
                            코인 자동 매수 매도 싸이트입니다.
                        </td>
                    </tr>
                    </tbody>
                </table>

                <hr/>

            </CustomModal>
        </Root>
    );
}
