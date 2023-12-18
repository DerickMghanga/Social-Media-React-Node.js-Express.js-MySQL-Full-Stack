import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link } from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const NavBar = () => {

  //darkmode setting from provider(localstorage)
  const {darkMode, toggle} = useContext(DarkModeContext);

  return (
    <div className='navbar'>

      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>deroo social</span>
        </Link>
        <HomeOutlinedIcon />

        <div onClick={()=>toggle()}>
          {
            !darkMode ? <DarkModeOutlinedIcon  /> : <WbSunnyOutlinedIcon/>
          }
        </div>
        
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..."/>
        </div>
      </div>

      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar