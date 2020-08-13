import React from "react";
import styled from "styled-components";
import input from "../../Components/Input";

const Wrapper = styled.div`
    padding-top: 50px;
    min-height: 90vh;
`;

const Search = styled.div`
    width: 100%;
    height: 27%;
    text-align: center;
    padding: 60px 0px;
`;

const Categories = styled.div`
    width: 100%;
    height: 15%;
    background-color: ${props => props.theme.whiteColor};
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-context: space-between;
    padding: 40px 20%;
`;

const Clubs = styled.div`
    width: 100%;
    height: 58%;
    background-color: ${props => props.theme.whiteColor};
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-context: space-between;
    padding: 0px 20vw;
    padding-bottom: 60px;
`;

const Icon = styled.div`
    font-weight: 700;
    font-size: 3.5em;
    padding: 20px;
`;

const Category = styled.div`
    
`;

const Img = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 200px;
    border: 1px solid ${props => props.theme.grayColor};
    &:hover {
        box-shadow: ${props => props.theme.lightGrayShadow};
        cursor: pointer;
    }
`;

const Club = styled.div`
    height: 230px;
    width: 15vw;
    text-align: center;
    box-shadow: ${props => props.theme.lightGrayShadow};
    border-radius: 10px;
    margin: 20px 0px;
    &:hover {
        box-shadow: ${props => props.theme.darkGrayShadow};
        cursor: pointer;
    }
`;

const Context = styled.div`
    padding: 15px;
    border-top: 1px solid ${props => props.theme.grayColor};
`;

const ClubName = styled.div`
    padding-bottom: 5px;
`;

const ClubText = styled.div`
    font-size: 0.8em;
`;

const ClubImg = styled.div`
    height: 72%;
    width: 100%;
`;

const Text = styled.div`
    padding: 10px;
    text-align: center;
`;

export default({

}) => (
    <Wrapper>
        <Search>
            <Icon>ㄷㅂ</Icon>
            <input style={{width: "400px", padding: "7px 15px", border: "1px solid #7FC4FD"}} placeholder="찾으려는 동아리 명을 입력해주세요."></input>
            {/* 위에 input은 레이아웃을 위한 임시
            <form onSubmit={onSubmit}>
               <Input placeholder={"Email"} {...email} type="email" />
               <Button div={"Log in"} />
            </form>*/}
        </Search>
        <Categories>
            <Category>
                <Img></Img>
                <Text>예체능</Text>
            </Category>
            <Category>
                <Img></Img>
                <Text>학술</Text>
            </Category>
            <Category>
                <Img></Img>
                <Text>친목</Text>
            </Category>
            <Category>
                <Img></Img>
                <Text>연합</Text>
            </Category>
            <Category>
                <Img></Img>
                <Text>기타</Text>
            </Category>
        </Categories>
        <Clubs>
            <Club>
                <ClubImg></ClubImg>
                <Context>
                    <ClubName>그리아미</ClubName>
                    <ClubText>예술</ClubText>
                </Context>
            </Club>
            <Club>
                <ClubImg></ClubImg>
                <Context>
                    <ClubName>그리아미</ClubName>
                    <ClubText>예술</ClubText>
                </Context>
            </Club>
            <Club>
                <ClubImg></ClubImg>
                <Context>
                    <ClubName>그리아미</ClubName>
                    <ClubText>예술</ClubText>
                </Context>
            </Club>
            <Club>
                <ClubImg></ClubImg>
                <Context>
                    <ClubName>그리아미</ClubName>
                    <ClubText>예술</ClubText>
                </Context>
            </Club>
            <Club>
                <ClubImg></ClubImg>
                <Context>
                    <ClubName>그리아미</ClubName>
                    <ClubText>예술</ClubText>
                </Context>
            </Club>
            <Club>
                <ClubImg></ClubImg>
                <Context>
                    <ClubName>그리아미</ClubName>
                    <ClubText>예술</ClubText>
                </Context>
            </Club>
            <Club>
                <ClubImg></ClubImg>
                <Context>
                    <ClubName>그리아미</ClubName>
                    <ClubText>예술</ClubText>
                </Context>
            </Club>
            <Club>
                <ClubImg></ClubImg>
                <Context>
                    <ClubName>그리아미</ClubName>
                    <ClubText>예술</ClubText>
                </Context>
            </Club>
            <Club>
                <ClubImg></ClubImg>
                <Context>
                    <ClubName>그리아미</ClubName>
                    <ClubText>예술</ClubText>
                </Context>
            </Club>
        </Clubs>
    </Wrapper>
)