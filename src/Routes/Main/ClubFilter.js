import React, { useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import ClubInfoContainer from "../ClubInfo/ClubInfoContainer";

const Club = styled.div`
  height: 230px;
  width: 15vw;
  text-align: center;
  box-shadow: ${(props) => props.theme.lightGrayShadow};
  border-radius: 10px;
  margin: 20px;
  &:hover {
    box-shadow: ${(props) => props.theme.darkGrayShadow};
    cursor: pointer;
  }
`;

const Context = styled.div`
  padding: 15px;
  border-top: 1px solid ${(props) => props.theme.grayColor};
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

export const ClubFilter = ({ clubs, myType }) => {
  {
    if (!clubs) {
      clubs = [];
    }
    return clubs.map((club) => {
      if (club.clubImage !== undefined && club.clubImage.url !== null) {
        console.log(club.clubImage.url);
      }
      return (
        <>
          {myType === "" && (
            <Popup
              key={club.id}
              trigger={
                <Club>
                  <ClubImg>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "7% 25%",
                      }}
                      src={club.logoImage}
                    ></img>
                  </ClubImg>

                  <Context>
                    <ClubName>{club.name}</ClubName>
                    <ClubText>{club.bio}</ClubText>
                  </Context>
                </Club>
              }
              modal
            >
              <ClubInfoContainer club={club} />
            </Popup>
          )}

          {myType.indexOf(`${club.type}`) !== -1 && (
            <Popup
              key={club.id}
              trigger={
                <Club>
                  <ClubImg>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "7% 25%",
                      }}
                      src={club.logoImage}
                    ></img>
                  </ClubImg>
                  <Context>
                    <ClubName>{club.name}</ClubName>
                    <ClubText>{club.bio}</ClubText>
                  </Context>
                </Club>
              }
              modal
            >
              <ClubInfoContainer club={club} />
            </Popup>
          )}
        </>
      );
    });
  }
};
