import { useContext } from "react"
import {AuthContext} from "../../context/authContext"
import "./comments.scss"

const Comments = () => {

    const {currentUser} = useContext(AuthContext);

    //DUMMY COMMENTS
    const comments = [
        {
            id: 1,
            name: "Alex Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/4236830/pexels-photo-4236830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc: "Morbi mollis tellus ac sapien. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Praesent ut ligula non mi varius sagittis.Aliquam erat volutpat. Praesent adipiscing. Etiam rhoncus.Praesent blandit laoreet nibh. Aliquam erat volutpat. Fusce neque.",
        },
        {
            id: 2,
            name: "Kunta Kinte",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/4049870/pexels-photo-4049870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc: "Fusce convallis metus id felis luctus adipiscing. Ut id nisl quis enim dignissim sagittis. Sed in libero ut nibh placerat accumsan.Aenean commodo ligula eget dolor. Cras varius. Praesent congue erat at massa.Ut leo. Suspendisse eu ligula. Morbi ac felis.Nullam vel sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nunc nec neque.",
        }
    ]

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="Write a comment..." />
                <button>Send</button>
            </div>

            {
                comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <img src={comment.profilePic} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments