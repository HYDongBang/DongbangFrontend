import React from "react";
import axios from "axios";
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
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let logoUrl = "";
        let clubUrl = "";
        if (logo.value !== "" && clubImg.value !== "") {
            const logoFile = new FormData();
            const clubFile = new FormData();
            const logoImg = document.getElementById("logo").files[0];
            const clubImg = document.getElementById("clubImg").files[0];
            logoFile.append("file", logoImg);
            clubFile.append("file", clubImg);
            try {
                const { data } = await axios.post("http://localhost:4000/api/upload", logoFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if(!data) {
                    console.log("fail to upload files");
                    toast.error("파일 업로드에 실패하였습니다.");
                } else {
                    logoUrl = data.location
                }
            } catch (e) {
                console.log(e.message);
                toast.error("파일 업로드에 실패하였습니다.");
            }
            try {
                console.log("file upload start");
                const { data } = await axios.post("http://18.210.10.66:4000/api/upload", clubFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log("file upload end");
                if(!data) {
                    console.log("fail to upload files");
                    toast.error("파일 업로드에 실패하였습니다.");
                } else {
                    clubUrl = data.location;
                }
            } catch (e) {
                console.log(e.message);
                toast.error("파일 업로드에 실패하였습니다.");
            }
        }
        if (name.value !== "" && type.value !== "" && description.value !== "") {
            try {
                if(clubUrl !== "" && logoUrl !== "") {
                    const {data} = await editClubMutation({
                        variables: {
                            action: "EDIT",
                            name: name.value,
                            bio: bio.value,
                            description: description.value,
                            clubImage: clubUrl,
                            logoImage: logoUrl
                        }
                    });
                    if(!data) {
                        console.log("fail to edit club");
                    } else {
                        toast.info("동아리 정보를 수정하였습니다.");
                    }
                } else {
                    const {data} = await editClubMutation({
                        variables: {
                            action: "EDIT",
                            name: name.value,
                            bio: bio.value,
                            description: description.value,
                        }
                    });
                    if(!data) {
                        console.log("fail to edit club");
                    } else {
                        toast.info("동아리 정보를 수정하였습니다.");
                    }
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