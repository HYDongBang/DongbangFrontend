import React from "react";
import ManageClubPresenter from "./ManageClubPresenter";
import useInput from "../../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { GET_CLUB, EDIT_CLUB } from "./ManageClubQueries";

export default () => {
    /*const { clubInfo } = useQuery(GET_CLUB, {
        variables: {
            id:
        }
    });
    const name = useInput(clubInfo.club.name);
    const type = useInput(clubInfo.club.type);
    const bio = useInput(clubInfo.club.bio);
    const description = useInput(clubInfo.club.description);
    const logo = useInput(clubInfo.club.logo);
    const clubImg = useInput(clubInfo.club.clubImg);
    const facebookURL = useInput(clubInfo.club.facebookURL);
    const instagramURL = useInput(clubInfo.club.instagramURL);
    const editClubMutation = useMutation(EDIT_CLUB, {
        variables: {
            name: name.value,
            type: type.value,
            bio: bio.value,
            description: description.value,
            logo: logo.value,
            clubImg: clubImg.value,
            facebookURL: facebookURL.value,
            instagramURL: instagramURL.value
        }
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (name.value !== "" && type.value !== "" && description.value !== "" && logo.value !== "" && clubImg.value !== "" && facebookURL.value !== "" && instagramURL.value !== "") {
            try {
                const {
                    data: { editClub: Club }
                } = await editClubMutation();
                if(!Club) {
                    console.log("fail to edit club");
                } else {
                    toast.success("동아리 정보를 수정하였습니다.");
                }
            }
        }
    }
    */
   const clubData = {
       name: "ㅇㅇ동아리",
       type: "예술",
       bio: "동아리아리아ㅓ리ㅏㅓㅇ",
       description: "동아리가 어저ㅜㅇ리아리ㅏㅓㄹ",
       logo: "",
       clubImg: "",
       facebookURL: "http://www.facebookURL.com",
       instagramURL: "http://www.instagramURL.com"
   }
   const name = useInput(clubData.name);
   const type = useInput(clubData.type);
   const bio = useInput(clubData.bio);
   const description = useInput(clubData.description);
   const logo = useInput("");
   const clubImg = useInput("");
   const facebookURL = useInput(clubData.facebookURL);
   const instagramURL = useInput(clubData.instagramURL);

   const onSubmit = async (e) => {
       e.preventDefault();
       toast.success("test: 수정완료");
   }
   return (
   <ManageClubPresenter
      name={name}
      type={type}
      bio={bio}
      description={description}
      logo={logo}
      clubImg={clubImg}
      facebookURL={facebookURL}
      instagramURL={instagramURL}
      onSubmit={onSubmit}
    />
   );
}