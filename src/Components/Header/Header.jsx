import React from 'react'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import {VscAccount} from "react-icons/vsc";
//import { AiOutlineHeart } from "react-icons/ai";
import {BsSliders} from "react-icons/bs";
import "./Header.scss";
import Sidebar from '../Sidebar/Sidebar';
import Search from './Search/Search';
//import authmodal from '../Account/authmodal';
import Popup from '../Account/Popup';
//import AuthModal from '../Account/AuthModal';





const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openPopup, setOpenPopup]= useState(false);
  const [showsidebar, setshowsidebar] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  const handlescroll = () =>{
    const offset = window.scrollY;
    if(offset > 200) {
      setScrolled(true);
    }else{
      setScrolled(false)
    }
  }

  useEffect(()=>{
      window.addEventListener("scroll",handlescroll);
  },[])

  const handelOpen = ()=>{
    setOpenPopup(true);
  };

  const handleClose = ()=>{
    setOpenPopup(false);
  };

  return (
    <>
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
          <div className='header-content'>
            <ul className="left">
             <NavLink to="/"> <li>Home</li> </NavLink>
             <NavLink to="about"> <li>About</li> </NavLink>
              <li>Contact Us</li>
            </ul>
            <div className="center">UNICODE</div>
            <div className='right'>
              <TbSearch onClick={()=> setshowSearch(true)}/>
              <VscAccount onClick={handelOpen}/>
              <span
              className='cart-icon' >
                <CgShoppingCart/>
                <span>5</span>
              </span>
              <span onClick={()=> setshowsidebar(true)}>
              <BsSliders/></span>
            </div>
          </div>
    </header>

  <Popup handleClose={handleClose} open={openPopup}/>

    {showsidebar && <Sidebar setshowsidebar={setshowsidebar} />}

    {showSearch && <Search setshowSearch={setshowSearch} />}
    
    </>
  )
}

export default Header
