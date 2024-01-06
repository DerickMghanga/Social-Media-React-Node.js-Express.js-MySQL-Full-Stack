import "./share.scss"
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from 'react-query';
import { makeRequest } from "../../axios";

const Share = () => {

    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("");

    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient();

    //upload to backend and Database
    const upload = async () => {
        try {
            const formData = new FormData();

            formData.append("file", file);

            const res = await makeRequest.post("/upload", formData);

            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    // Mutations - Add post to DB and Refetch all Posts
    const mutation = useMutation((newPost) => {

        return makeRequest.post("/posts", newPost);
    }, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(['posts'])  //updates the posts list(Posts.jsx)
        },
    })

    // share post
    const handleShare = async (e) => {
        // e.preventDefault();

        let imgUrl = "";

        if (file) imgUrl = await upload();  //if user added a file

        if (desc.length > 0  || imgUrl.length > 0) { //prevent empty post to be submitted
            mutation.mutate({ desc, img: imgUrl });
        }
    }

    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <img src={`http://localhost:8800/${currentUser?.profilePic}`} alt="" />
                        <input type="text"
                            placeholder={`What's on your mind ${currentUser.name}?`}
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>

                    <div className="right">
                        {
                            file && <img className="file" src={URL.createObjectURL(file)} alt="" />
                        }
                    </div>
                </div>

                <hr />

                <div className="bottom">
                    <div className="left">
                        <input type="file" id="file" style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />

                        <label htmlFor="file">
                            <div className="item">
                                <img src={Image} alt="" />
                                <span>Add Image</span>
                            </div>
                        </label>

                        <div className="item">
                            <img src={Map} alt="" />
                            <span>Add Place</span>
                        </div>

                        <div className="item">
                            <img src={Friend} alt="" />
                            <span>Tag Friends</span>
                        </div>
                    </div>

                    <div className="right">
                        <button onClick={() => { handleShare(); setDesc(""); setFile(null); }}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share