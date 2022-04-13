import styled from "styled-components";
import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import {Tag} from "./elements/Tag";

const Root = styled.div`
    
    margin: 0 auto;
    .card {
        width: 300px;
        height: 350px;
        background-color: black;
        box-shadow: 1px 1px 2px grey, 0 0 25px white, 0 0 5px lightgrey;
        
        text-align: left;
        
        .cardSubject {
            width: 100%;
            height: 65%;
            
            font-size: 35px;
            color: white;
        }
        
        .descriptionSummary {
            width: 100%;
            height: 35%;
            background-color: white;
            
            text-align: center;
            
            .subject {
                color: black;
                font-size: 15px;
                
                line-height: 50px;
            }
            
            .skillStack {
                font-size: 13px;
                line-height: 30px;
            }
            
            .devPeriod {
                font-size: 10px;
                line-height: 50px;
            }
        }
    }
`;

export const Card =
({
    cardSubject,
    devPeriod,
    tags,
}) => {

    return (
        <Root>
            <div className="card">
                <div className="cardSubject">
                    {cardSubject}
                </div>

                <div className="descriptionSummary">
                    <div className="subject">
                        <MdDeveloperMode/>
                        {cardSubject}
                    </div>

                    <div className="skillStack">
                        {
                            tags.map((v, i) => (
                                <Tag text={v.tagText} color={v.tagColor}></Tag>
                            ))
                        }
                    </div>

                    <div className="devPeriod">
                        {devPeriod}
                    </div>
                </div>
            </div>
        </Root>
    );
};