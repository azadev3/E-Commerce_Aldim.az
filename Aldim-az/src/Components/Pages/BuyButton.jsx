import React, { useEffect, useState } from 'react'
import '../Pages/MostViewPages/mostviewpage.scss';
import { Bounce, ToastContainer, Zoom, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BuyButton = ({ product }) => {
  const initialBasketValue = localStorage.getItem(`basket_${product.id}`) === 'true';
  const [basket, setBasket] = useState(initialBasketValue);

  const handleOnBasket = () => {
    const newBasketValue = !basket;
    setBasket(newBasketValue);
    localStorage.setItem(`basket_${product.id}`, newBasketValue.toString());
    if (newBasketValue) {
      toast.success(`${product.model} SƏBƏTƏ ƏLAVƏ EDİLDİ.`, {
        position: toast.POSITION.TOP_CENTER
      });
    } 
  };
  return (
    <div className='button'>
      {basket && (
          <ToastContainer
            draggable={false}
            autoClose={2300}
            transition={Bounce}
          />
        )}
     <button id={basket ? 'basketBtn' : 'buybtn'} onClick={handleOnBasket}>
      {`${basket ? 'Geri al' : 'Səbətə at'}`}
    </button>
    </div>
  )
}

export default BuyButton