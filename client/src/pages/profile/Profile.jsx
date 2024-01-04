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
import { useQuery } from 'react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
//import { useParams } from 'react-router-dom';

const Profile = () => {

  //  const {id} = useParams();
  //  console.log(id);
 
  const { currentUser } = useContext(AuthContext);   // 'id' is a number

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  //fetch profile details
  const { isLoading, error, data } = useQuery(['user'], () =>
    makeRequest.get(`/users/find/${userId}`).then((res) => {
      // console.log(res.data);
      return res.data;
    })
  )
  //console.log(data)

  //fetch following/followers details
  const { data: relationshipData } = useQuery(['relationship'], () =>
    makeRequest.get('/relationships?followedUserId='+ userId).then((res) => {
      // console.log(res.data);
      return res.data;
    })
  )
  console.log(relationshipData);

  const handleFollow = () => {
    
  }

  return (
    <div className="profile">
      <div className="images">
        <img src={data?.coverPic} alt="" className='cover' />

        <img src={data?.profilePic} alt="" className='profilePic' />
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
              <button>Update</button>
              : 
              <button onClick={handleFollow}>Follow</button>
            }
          </div>

          <div className="right">
            <MailOutlineIcon />
            <MoreHorizIcon />
          </div>
        </div>

        <Posts />
      </div>
    </div>
  )
}

export default Profile