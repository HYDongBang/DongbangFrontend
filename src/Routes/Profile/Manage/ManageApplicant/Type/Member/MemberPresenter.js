import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 20px 0px;
    padding: 25px;
    background-color: ${props => props.theme.whiteColor};
    height: 560px;
    overflow-y: auto;
`;

const Members = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Member = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.lightGrayColor};
    margin: 10px 20px;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: ${props => props.theme.lightGrayShadow};
`;

const Contents = styled.div`
    padding-right: 70px;
`;

const Name = styled.div`
    font-weight: 600;
    padding-bottom: 6px;
`;

const Number = styled.div`
    font-size: 0.8em;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.whiteColor};
    &:hover {
        color: ${props => props.theme.blueColor};
    }
    $:focus {
        border: none;
    }
`;

export default ({ members, onSubmit }) => (
    <Wrapper>
        <Members>
            {members.map(({ name, studentNumber }) => {
                return (
                    <form onSubmit={onSubmit}>
                        <Member>
                            <Contents>
                                <Name>{name}</Name>
                                <Number>{studentNumber}</Number>
                            </Contents>
                            <Button>탈퇴</Button>
                        </Member>
                    </form>
                );
            })}
        </Members>
    </Wrapper>
)