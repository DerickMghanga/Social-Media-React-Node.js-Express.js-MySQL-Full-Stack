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

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='cover' />

        <img src="https://images.pexels.com/photos/3367850/pexels-photo-3367850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='profilePic' />
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
            <span className='name'>John Doe</span>

            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>

              <div className="item">
                <LanguageIcon />
                <span>derickmg.dev</span>
              </div>
            </div>

            <button>Follow</button>
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