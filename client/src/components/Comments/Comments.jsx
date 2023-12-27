import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"
import "./comments.scss"
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Comments = ({ postId }) => {
    //console.log(postId);

    const [desc, setDesc] = useState("");

    const { currentUser } = useContext(AuthContext);
    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery(['comments'], () =>
        makeRequest.get("/comments?postId=" + postId).then((res) => {
            // console.log(res.data);
            return res.data;
        })
    )
    //console.log(data);


    // Mutations - Add comment to post and Refetch all comments
    const mutation = useMutation((newComment) => {
        return makeRequest.post("/comments", newComment);
    }, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(['comments']) //updates the comments list
        },
    })

    // add comment
    const handleShare = async() => {

        mutation.mutate({ desc, postId });
        setDesc("");
    }

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="Write a comment..."
                    value={desc} onChange={(e)=>setDesc(e.target.value)}
                />
                <button onClick={handleShare}>
                    Send
                </button>
            </div>

            {
                isLoading ? "Loading..." : data.map(comment => (
                    <div key={comment.id} className="comment">
                        <img src={comment.profilePic} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">{moment(comment.createdAt).fromNow()}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments