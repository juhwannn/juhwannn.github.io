import React, {useState} from "react";
import styled from "styled-components";
import {RightColor} from "./Color";

const SwitchLabel = styled.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 40px;
    height: 20px;
    background: ${props  => (props.switchState ? "#FFF" :  RightColor)};
    display: block;
    border-radius: 100px;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        left: ${props => (props.switchState ? "3px" : "calc(55%)")};
        top: 3px;
        width: 15px;
        height: 15px;
        background: ${props  => (props.switchState ? RightColor :  "#FFF")};
        border-radius: 90px;
        transition: 0.3s;
    }
`;

export default function ToggleSwitch({clickHandler}) {
    const [switchState, setSwitchState] = useState(true);

    return (
        <SwitchLabel switchState={switchState}>
            <input
                type="checkbox"
                checked={switchState}
                onChange={e => setSwitchState(!switchState)}
                onClick={clickHandler}
            />
        </SwitchLabel>
    )
};
