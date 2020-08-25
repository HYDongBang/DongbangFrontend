import React from "react";
import styled from "styled-components";
import Loading from "../../../../../../Components/Loading";

const Wrapper = styled.div`
    margin: 20px 0px;
    height: 560px;
    overflow-y: auto;
`;

const Members = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Member = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.grayColor};
    margin: 10px 30px;
    padding: 12px 20px;
    border-radius: 10px;
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
    background-color: ${props => props.theme.bgColor};
    &:hover {
        color: ${props => props.theme.blueColor};
    }
    $:focus {
        border: none;
    }
`;

export default ({ members, onSubmit, loading }) => (
    <Wrapper>
        {loading && <Loading></Loading>}
        {!loading && (
            <Members>
                {members.map(({ name, studentNumber }) => {
                    return (
                        <form onSubmit={onSubmit}>
                            <Member>
                                <Contents>
                                    <Name>{name}</Name>
                                    <Number>{studentNumber}</Number>
                                </Contents>
                                <Button onClick={() => alert("탈퇴 시키겠습니까?")}>탈퇴</Button>
                            </Member>
                        </form>
                    );
                })}
            </Members>
        )}
    </Wrapper>
)