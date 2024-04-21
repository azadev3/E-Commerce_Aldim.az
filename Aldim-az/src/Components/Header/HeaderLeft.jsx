import React from 'react';
import logo from '/aldiqlogo.svg';
import { Link } from 'react-router-dom';

export default function HeaderLeft() {
  return (
    <div className='header-left'>
          <Link to='/'><img src={logo} alt='WebsiteLogo not found...'/></Link>
    </div>
  )
}
