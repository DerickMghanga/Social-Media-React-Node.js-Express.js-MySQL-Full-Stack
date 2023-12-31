import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {

  const navigate = useNavigate();

  //darkmode setting from provider(localstorage)
  const { darkMode, toggle } = useContext(DarkModeContext);

  //get user info after login
  const { currentUser } = useContext(AuthContext);
  //console.log(currentUser.profilePic);

  return (
    <div className='navbar'>

      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>deroo social</span>
        </Link>
        <HomeOutlinedIcon />

        <div onClick={() => toggle()}>
          {
            !darkMode ? <DarkModeOutlinedIcon /> : <WbSunnyOutlinedIcon />
          }
        </div>

        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user" style={{cursor: "pointer"}}
          onClick={()=>navigate(`/profile/${currentUser.id}`)}
        >
          <img src={`http://localhost:8800/${currentUser?.profilePic}`} alt="" />
          <span>{currentUser?.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar