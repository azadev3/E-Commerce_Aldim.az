import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { PiPaintBrushHouseholdDuotone } from 'react-icons/pi';
import { MdPhoneIphone } from 'react-icons/md';
import { GiLargeDress, GiTShirt} from 'react-icons/gi';
import HouseEquipment from './HouseEquipment/HouseEquipment';
import Electronics from './Electronics/Electronics';
import WomenWear from './WomenWear/WomenWear';
import MenWear from './MenWear/MenWear';


export default function HeaderCenter() {

  //navlinks
  const NavbarItems = [
    {id: 1, name: 'Məişət avadanlıqları'},
    {id: 2, name: 'Elektronika'},
    {id: 3, name: 'Qadın geyimləri'},
    {id: 4, name: 'Kişi geyimləri'},
  ];

  const [isMenu, setIsMenu] = useState("");
  const timeoutRef = useRef();

  const toggleMenu = (menu) => {
    setIsMenu(menu);
  }
  const closeMenu = () => {
    setTimeout(() => {
      setIsMenu("");
    }, 100);
  };
  
  //ALL MENU FUNCTION'S AND ALL MANU SETTINGS


  return (
    <div className='header-center'>
      {NavbarItems.map ((items) => (
        <nav className='header-navlinks' key={items.id} >
          {/* icons */}
          {items.id === 1 && <PiPaintBrushHouseholdDuotone style={{fontSize: '1.4rem'}}/>}
          {items.id === 2 && <MdPhoneIphone style={{fontSize: '1.4rem'}}/>}
          {items.id === 3 && <GiLargeDress style={{fontSize: '1.4rem'}}/>}
          {items.id === 4 && <GiTShirt style={{fontSize: '1.4rem'}}/>}

          {/* navlinks */}
          <Link
            id="links1"
            onMouseEnter={() => {clearTimeout(timeoutRef.current);toggleMenu("houseEq");}}
            onMouseLeave={() => {timeoutRef.current = setTimeout(closeMenu, 100);}}>{items.id === 1 && items.name}</Link>
            {items.id === 1 && isMenu === "houseEq" && (
            <div className="houseEq"
            onMouseEnter={() => {clearTimeout(timeoutRef.current);}}
            onMouseLeave={() => {timeoutRef.current = setTimeout(closeMenu, 100);}}
            style={{ display: isMenu === "houseEq" ? "flex" : "none" }}>
            <HouseEquipment />
          </div>
          )}



          <Link 
          onMouseEnter={() => {clearTimeout(timeoutRef.current);toggleMenu("electro");}}
          onMouseLeave={() => {timeoutRef.current = setTimeout(closeMenu, 100);}}
          id='links2'>{items.id === 2 && items.name}</Link>
          {items.id === 2 && isMenu === "electro" && (
            <div className='electro' 
            onMouseEnter={() => {clearTimeout(timeoutRef.current)}}
            onMouseLeave={() => {timeoutRef.current = setTimeout(closeMenu, 100)}}
            style={{display: isMenu === "electro" ? "flex" : "none"}}>
              <Electronics />
            </div>
          )}



          <Link
          onMouseEnter={() => {clearTimeout(timeoutRef.current); toggleMenu("womenwear")}}
          onMouseLeave={() => {timeoutRef.current = setTimeout(closeMenu, 100)}}
          id='links3'>
            {items.id === 3 && items.name}
          </Link>
          {items.id === 3 && isMenu === "womenwear" && (
            <div className='womenwear'
            onMouseEnter={() => {clearTimeout(timeoutRef.current)}}
            onMouseLeave={() => {timeoutRef.current = setTimeout(closeMenu, 100)}}
            style={{display: isMenu === "womenwear" ? "flex" : "none"}}>
              <WomenWear />
            </div>
          )}



          <Link 
          onMouseEnter={() => {clearTimeout(timeoutRef.current);toggleMenu("menwear")}}
          onMouseLeave={() => {timeoutRef.current = setTimeout(closeMenu, 100)}}
          id='links4'>
            {items.id === 4 && items.name}
          </Link>
          {items.id === 4 && isMenu === "menwear" && (
            <div className='menwear'
            onMouseEnter={() => {clearTimeout(timeoutRef.current)}}
            onMouseLeave={() => {timeoutRef.current = setTimeout(closeMenu, 100)}}
            style={{display: isMenu === "menwear" ? "flex" : "none"}}>
              <MenWear />
            </div>
          )}

        </nav>
      ))}
    </div>
  )
}
