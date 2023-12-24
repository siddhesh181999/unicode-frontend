import React from 'react'
import { MdClose,} from "react-icons/md";
import {
  FaHome,
  FaUserAlt,
  FaRegChartBar,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import "./Sidebar.scss";


const menuItem=[
  {
      path:"/",
      name:"Home",
      icon:<FaHome/>
  },
  {
      path:"/about",
      name:"About",
      icon:<FaUserAlt/>
  },
  {
      path:"/singleproduct",
      name:"Analytics",
      icon:<FaRegChartBar/>
  },
  
]

const Sidebar = ({setshowsidebar}) => {
  return (
    <div className='cart-panel'>
        <div className='opac-layer'></div>
        <div className='cart-content'>
            <div className='cart-header'>
                <span className='heading'>Menu</span>
                <span className='close-btn' onClick={()=> setshowsidebar(false)}>
                    <MdClose/>
                    <span className='text'>Close</span>
                </span>
            </div>

            {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }


        </div>

      
    </div>
  )
}

export default Sidebar
