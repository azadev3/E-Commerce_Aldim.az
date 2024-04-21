import React, { useEffect, useRef } from 'react'
import '../../Components/ProfileOpenmenu/Menu.scss';
import {ImProfile} from 'react-icons/im'
import { PiHandCoinsDuotone, PiPasswordDuotone } from "react-icons/pi";
import {HiOutlineMailOpen} from 'react-icons/hi'
import {IoExitOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';


const Menu = () => {

return (
    <div className='menu'>
          <div className='options'>
               <div className='class'>
               <ImProfile/><Link style={{color:'#525252'}} to='/my-profile'><h6>Profilim</h6></Link>
               </div>
               <div className='class'>
               <PiHandCoinsDuotone /><h6>Xallarım</h6>
               </div>
               <div className='class'>
               <PiPasswordDuotone/><h6>Şifrəni dəyiş</h6>
               </div>
               <div className='class'>
               <HiOutlineMailOpen/><h6>Email dəyiş</h6>
               </div>
               <div className='class'>
               <IoExitOutline /><Link style={{color:'#525252'}} to='/aldiq-az-login'><h6>Çıxış</h6></Link>
               </div>
          </div>
    </div>
  )
}

export default Menu;