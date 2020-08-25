import React from "react";
import ManageClubPresenter from "./ManageClubPresenter";
import useInput from "../../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { GET_CLUB, EDIT_CLUB } from "./ManageClubQueries";

export default () => {
    const getClubQuery = useQuery(GET_CLUB);
    const [ editClubMutation ] = useMutation(EDIT_CLUB);

    const name = useInput("");
    const type = useInput("");
    const bio = useInput("");
    const description = useInput("");
    const logo = useInput("");
    const clubImg = useInput("");

    /*const onSubmit = async (e) => {
        e.preventDefault();
        if (name.value !== "" && type.value !== "" && description.value !== "" && logo.value !== "" && clubImg.value !== "") {
            try {
                const {data: { editClub }} = await editClubMutation();
                if(!editClub) {
                    console.log("fail to edit club");
                } else {
                    toast.success("동아리 정보를 수정하였습니다.");
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    }*/

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
      onSubmit={onSubmit}
      loading={getClubQuery.loading}
    />
   );
}