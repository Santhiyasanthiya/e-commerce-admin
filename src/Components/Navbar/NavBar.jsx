import React from 'react';
import './NavBar.css';
import navlogo from '../../assets/nav-logo.svg'
import nav_logo from '../../assets/logo.png'


const NavBar = () => {
  return (
    <div className='navbar'>
    <img src={navlogo} alt="" className='nav-logo'/>

    <img src={nav_logo} alt="" className='nav-profile'/>


</div>
  );
}

export default NavBar;
