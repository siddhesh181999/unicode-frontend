import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {

    const [menu,setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>UNICODE</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("School")}}><Link style={{ textDecoration: 'none' }} to='/school'>School</Link>{menu==="School"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("College")}}><Link style={{ textDecoration: 'none' }} to='/college'>College</Link>{menu==="College"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kindergarden")}}><Link style={{ textDecoration: 'none' }} to='/kindergarden'>Kindergarden</Link>{menu==="Kindergarden"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
