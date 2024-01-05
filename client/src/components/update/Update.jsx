import { useState } from "react";
import "./update.scss" ;
import { FaRegWindowClose } from "react-icons/fa";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "react-query";

const Update = ({setOpenUpdate, user}) => {

    const [texts, setTexts] = useState({
        name: "",
        city: "",
        website: "",
    })

    const [cover, setCoverPic] = useState(null);
    const [profile, setProfile] = useState(null);

    //upload profile/Cover
    const upload = async (file) => {
        try {
            const formData = new FormData();

            formData.append("file", file);

            const res = await makeRequest.post("/upload", formData);

            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    //update inputs 
    const handleChange = (e) => {
        setTexts((prev) => ({...prev, [e.target.name] : [e.target.value]}));
    }

    const queryClient = useQueryClient();  //react-query

    //mutation to update and refetch users info
    const mutation = useMutation((user) => {
        return makeRequest.put("/users", user);
    },
    {
        onSuccess: ()=> {
            //inavalidate and refetch user
            queryClient.invalidateQueries(["user"]);
        }
    })

    //submit 
    const handleSubmit = async(e) => {
        e.preventDefault();

        let coverPic = user.coverPic;
        let profilePic = user.profilePic;

        //if a file is selected update it
        coverPic = cover && await upload(cover);
        profilePic = profile && await upload(profile);

        mutation.mutate({...texts, coverPic, profilePic});
        setOpenUpdate(false);
    }

  return (
    <div className="update" >
        <span onClick={()=>setOpenUpdate(false)} style={{cursor: "pointer"}}>
            <FaRegWindowClose size={22} />
        </span>

        <form>
            <input type="file" />
            <input type="file" />
            <input type="text" name="name" onChange={handleChange} />
            <input type="text" name="city" onChange={handleChange} />
            <input type="text" name="website" onChange={handleChange} />
            <button onClick={handleSubmit}>Update</button>
        </form>
    </div>
  )
}

export default Update