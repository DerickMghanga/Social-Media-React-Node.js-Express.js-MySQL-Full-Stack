import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    //get user info after login
    const {currentUser} = useContext(AuthContext);

  //TEMPORARY DUMMY DATA
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]

  return (
    <div className='stories'>

      <div className="story">
        <img src={`http://localhost:8800/${currentUser?.profilePic}`} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {
        stories.map((story, index) => (
          <div key={index} className="story">
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Stories