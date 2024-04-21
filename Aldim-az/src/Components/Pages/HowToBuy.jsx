import React, { useEffect, useRef, useState } from "react";
import "../Pages/HowToBuy.scss";
import {AiOutlinePlusSquare} from 'react-icons/ai';

const HowToBuy = () => {

  const checkboxone = useRef(null);
  const checkboxtwo = useRef(null);
  const [show, setShow] = useState(false);
  const [showtwo, setShowtwo] = useState(false);

  const handleOne = () => {
    setShow(!show)
  }
  const handleTwo = () => {
    setShowtwo(!showtwo)
  }
  useEffect(() => {
    if (show && showtwo && checkboxone.current && checkboxtwo.current) {
      checkboxone.current.style.height = "10rem";
      checkboxtwo.current.style.height = "10rem";
    } else {
      checkboxone.current.style.height = "3.5rem";
      checkboxtwo.current.style.height = "3.5rem";
    }
  }, [show, showtwo]);
  
  return (
    <div className="how-to-buy">

      <section className="checkbox-one" ref={checkboxone}>
        <div className="title">
          <strong>Necə alışveriş edə bilərəm?</strong>
          <AiOutlinePlusSquare id="iconPlus" onClick={handleOne}/>
        </div>
        
      </section>
      <section className="checkbox-two" ref={checkboxtwo}>
      <div className="title">
        <strong>Sifarişim nə zaman çatdırılacaq?</strong>
        <AiOutlinePlusSquare id="iconPlus" onClick={handleTwo}/>
      </div>
      
      </section>
      <section className="checkbox-three">
      <div className="title">
        <strong>Məhsullarınız digərlərindən nə ilə fərqlənir?</strong>
        <AiOutlinePlusSquare id="iconPlus"/>
        </div>
      </section>

    </div>
  );
};

export default HowToBuy;
