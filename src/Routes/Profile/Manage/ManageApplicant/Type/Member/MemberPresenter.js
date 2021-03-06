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
  min-width: 230px;
`;

const Contents = styled.div`
  width: 150px;
`;

const StudentName = styled.div`
  font-weight: 600;
  padding-bottom: 6px;
`;

const Number = styled.div`
  font-size: 0.8em;
`;

const Button = styled.button`
  cursor: pointer;
  color: ${props => props.theme.darkGrayColor};
  border: none;
  background-color: ${props => props.theme.bgColor};
  &:hover {
    color: ${props => props.theme.blueColor};
  }
  $:focus {
    border: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default ({ members, onDelete, loading }) => (
  <Wrapper>
    {loading && <Loading></Loading>}
    {!loading && (
      <Members>
        {members.map(({ id, Name, studentNumber }) => {
          return (
            <form onSubmit={onDelete} key={id} data-key={id}>
              <Member>
                <Contents>
                  <StudentName>{Name}</StudentName>
                  <Number>{studentNumber}</Number>
                </Contents>
                <ButtonContainer>
                  <Button>탈퇴</Button>
                </ButtonContainer>
              </Member>
            </form>
          );
        })}
      </Members>
    )}
  </Wrapper>
);
