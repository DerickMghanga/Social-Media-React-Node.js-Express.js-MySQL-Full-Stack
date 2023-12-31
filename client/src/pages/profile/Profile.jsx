import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Posts from "../../components/Posts/Posts";

import "./profile.scss"
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import Update from '../../components/update/Update';
//import { useParams } from 'react-router-dom';

const Profile = () => {

  //  const {id} = useParams();
  //  console.log(id);

  const [openUpdate, setOpenUpdate] = useState(false); //update modal

  const { currentUser } = useContext(AuthContext);   // 'id' is a number

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  //fetch user profile details
  const { isLoading, error, data } = useQuery(['user'], () =>
    makeRequest.get(`/users/find/${userId}`).then((res) => {
      // console.log(res.data);
      return res.data;
    })
  )
  //console.log(data)

  //fetch following/followers details
  const { data: relationshipData } = useQuery(['relationship'], () =>
    makeRequest.get('/relationships?followedUserId=' + userId).then((res) => {
      // console.log(res.data);
      return res.data;
    })
  )
  //console.log(relationshipData);

  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation((following) => {
    if (following) return makeRequest.delete("/relationships?userId=" + userId);;

    return makeRequest.post("/relationships", { userId });
  }, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['relationship']) //updates the following/follower list
    },
  })

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id)); //'includes' returns true or false
    // True if 'following'(id included in 'data' array)
  }

  return (
    <div className="profile">
      <div className="images">
        <img src={`http://localhost:8800/${data?.coverPic}`} alt="" className='cover' />

        <img src={`http://localhost:8800/${data?.profilePic}`} alt="" className='profilePic' />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com">
              <FacebookIcon fontSize='large' />
            </a>
            <a href="https://www.facebook.com">
              <InstagramIcon fontSize='large' />
            </a>
            <a href="https://www.facebook.com">
              <TwitterIcon fontSize='large' />
            </a>
            <a href="https://www.facebook.com">
              <LinkedInIcon fontSize='large' />
            </a>
            <a href="https://www.facebook.com">
              <PinterestIcon fontSize='large' />
            </a>
          </div>

          <div className="center">
            <span className='name'>{data?.name}</span>

            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data?.city}</span>
              </div>

              <div className="item">
                <LanguageIcon />
                <span>{data?.website}</span>
              </div>
            </div>

            {
              userId === currentUser.id ?
                <button onClick={()=>setOpenUpdate(true)}>Update</button>
                :
                <button onClick={handleFollow}>
                  {relationshipData?.includes(currentUser.id) ? "Following" : "Follow"}
                </button>
            }
          </div>

          <div className="right">
            <MailOutlineIcon />
            <MoreHorizIcon />
          </div>
        </div>

        {/* IN PROFILE PAGE FETCH CURRENT USERS POSTS ONLY */}
        <Posts userId={userId} />
      </div>

      { openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} /> }
    </div>
  )
}

export default Profile