import React, { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { SlBasketLoaded } from "react-icons/sl";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contextapi/Auth";
import { AiFillCaretDown } from 'react-icons/ai'
import Menu from "../../AuthenticationUser/Components/ProfileOpenmenu/Menu";

export default function HeaderBottomRight() {
  
 const [basketData, setBasketData] = useState(false);
  const getBasketData = (productID) => {
    return localStorage.getItem(`basket_${productID}`) === 'true';
  };
  const updateBasketData = () => {
    const isLaptopsInBasket = getBasketData('1');
    const isShoesInBasket = getBasketData('2');
    const isJeansInBasket = getBasketData('3');
    const isPhonesInBasket = getBasketData('4');
    setBasketData(isShoesInBasket || isPhonesInBasket || isLaptopsInBasket || isJeansInBasket);
  };
  useEffect(() => {
    updateBasketData();
    document.addEventListener("click", updateBasketData);
    return () => {
      document.removeEventListener("click", updateBasketData);
    };
  }, []);

  const { auth } = useContext(AuthContext);
  const user = localStorage.getItem('user');

  const [menu, setMenu] = useState(false);
  const toggleProfileMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className="header-bottom-right">

      {auth ? (
      <div className="auth-profile-box">
      <div className="icons">
        <CgProfile style={{fontSize:'1.7rem'}}/>
        <AiFillCaretDown id="caret" onClick={toggleProfileMenu}/>
      </div>
        <Link to="" id="myProfile">
        <Link to='' style={{color: '#303030'}}>
           <h6>
          {user}
          </h6>
        </Link>
      </Link>
      {menu && (
        <Menu />
      )}

      </div>



      ) : (
        <div className="auth-profile-box">
        <Link to="" id="myProfile">
        <CgProfile style={{fontSize: '1.6rem', marginRight: '1rem'}}/>
      </Link>
      </div>
      )}
      

      <Link to="/sebetim" id="myBasket" className={basketData ? "notification" : ""}
      >
        <SlBasketLoaded 
        style={{color: basketData ? "#198754" : "#303030"}} 
        />
        <Link to={auth ? '/sebetim' : '/aldiq-az-login'} style={{color: '#303030'}}><h6>Səbətim</h6></Link>
      </Link>

    </div>
  );
}
