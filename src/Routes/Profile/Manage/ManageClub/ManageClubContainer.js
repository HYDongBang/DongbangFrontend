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

    if(!getClubQuery.loading && name.value === "" && type.value === "" && bio.value === "" && description.value === "") {
        const data = getClubQuery.data.me.isMaster;
        name.onChange({ target: { value: data.name }});
        type.onChange({ target: { value: data.type }});
        bio.onChange({ target: { value: data.bio }});
        description.onChange({ target: { value: data.description }});
        //logo.onChange({ target: { value: data.logo }});
        //clubImg.onChange({ target: { value: data.clubImg }});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (name.value !== "" && type.value !== "" && description.value !== "") {
            try {
                const {data} = await editClubMutation({
                    variables: {
                        action: "EDIT",
                        name: name.value,
                        bio: bio.value,
                        description: description.value
                    }
                });
                if(!data) {
                    console.log("fail to edit club");
                } else {
                    toast.info("동아리 정보를 수정하였습니다.");
                }
            } catch (e) {
                console.log(e.message);
                toast.error("다시 시도해 주세요");
            }
        }
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