import "./Post.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom'
import { useState } from "react";
import Comments from "../Comments/Comments";

const Post = ({ post }) => {

    //COMMENTS CONDITION
    const [commentOpen, SetCommentOpen] = useState(false);

    //TEMPORARY FXN
    const [liked, setLiked] = useState(false);

    const toggle = () => {
        setLiked(!liked);
    }

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
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>

                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post?.img} alt="" />
                </div>

                <div className="info">
                    <div className="item" onClick={()=>toggle()}>
                        {
                            liked ? <FavoriteIcon /> : <FavoriteBorderIcon/>
                        }
                        112 likes
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
                  commentOpen && <Comments />
                }
            </div>
        </div>
    )
}

export default Post