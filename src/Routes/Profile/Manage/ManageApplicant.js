import React from "react"
import styled from "styled-components";
import ManageMember from "./applicant/member";
import ManageApplicant from "./applicant/applicant";
import ManageForm from "./applicant/form";

const Title = styled.div`
    padding: 20px 0px;
    font-size: 1.7em;
    text-align: center;
`;

const Contents = styled.div`
    border: 1px solid ${props => props.theme.lightGrayColor};
    
`;

const Menu = styled.div``;

const Link = styled.a``;

const Wrapper = styled.div``;

export default () => ( 
    <>
        <Title>지원자 관리</Title>
        <Contents>
            <Menu>
                <Link >멤버 관리</Link>
                <Link >지원자 관리</Link>
                <Link >가입신청 양식</Link>
            </Menu> 
            <Wrapper>
                
            </Wrapper>
        </Contents>
    </>
)