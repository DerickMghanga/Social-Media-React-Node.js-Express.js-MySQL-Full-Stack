import "./Post.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import Comments from "../Comments/Comments";
import moment from "moment";
import { useMutation, useQuery } from "react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

const Post = ({ post }) => {

    const {currentUser} = useContext(AuthContext)

    //COMMENTS CONDITION
    const [commentOpen, SetCommentOpen] = useState(false);

    //fetch Likes count
    const { isLoading, error, data } = useQuery(['likes', post.id], () =>
        makeRequest.get("/likes?postId=" + post.id).then((res) => {
            // console.log(res.data);
            return res.data;
        })
    )
    console.log(data);
    

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`}
                                style={{ textDecoration: "none", color: "inherit" }}>
                                <span>{post.name}</span>
                            </Link>
                            <span className="date">
                                {moment(post.createdAt).fromNow()}
                            </span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>

                <div className="content">
                    <p>{post.desc}</p>
                    <img src={`http://localhost:8800/${post?.img}`} alt="" />
                </div>

                <div className="info">
                    <div className="item" >
                        {
                            data?.includes(currentUser.id) ? <FavoriteIcon style={{color: "red"}} /> : <FavoriteBorderIcon/>
                        }
                        {data?.length} likes
                    </div>

                    <div className="item" 
                        onClick={()=> SetCommentOpen(!commentOpen)}>
                        <TextsmsIcon />
                        12 comments
                    </div>

                    <div className="item">
                        <ShareIcon />
                        Share
                    </div>
                </div>

                {/* IF "commentOpen" True show the comments */}
                {
                  commentOpen && <Comments postId={post.id} />
                }
            </div>
        </div>
    )
}

export default Post