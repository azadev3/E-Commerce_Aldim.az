import React, { useEffect, useState } from "react";
import "../MyBasket/Basket.scss";
import { PiMaskSadDuotone } from "react-icons/pi";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Basket() {
  const [allData, setAllData] = useState([]);
  const [basketing, setBasketing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shoesResponse = await axios.get("http://localhost:3000/shoes");
        const phoneResponse = await axios.get("http://localhost:3000/phones");
        const laptopResponse = await axios.get("http://localhost:3000/laptops");
        const jeansResponse = await axios.get("http://localhost:3000/jeans");

        const allDataCombine = [
          ...shoesResponse.data,
          ...phoneResponse.data,
          ...laptopResponse.data,
          ...jeansResponse.data,
        ];

        setAllData(allDataCombine);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
      const trueKeys = Object.keys(localStorage).filter((key) => {
        return localStorage.getItem(key) === "true";
      });
      setBasketing(trueKeys);
  }, []);

  return (
    <>
      {basketing.length > 0 ? (
        <div className="basket-content">
        {allData.filter((product) => basketing.includes(`basket_${product.id}`)).map((product) => (
            <div key={product.id} className="container">
              <div className="box image-price">
              <img  src={product.image} alt={product.model} 
              id={product.id === 2 ? "nike" :
                  product.id === 1 ? "laptop" :
                  product.id === 3 ? "jean" : ""
              }
              />
              </div>
              <div className="box description">
              <h3>{product.model}</h3>
                <span>Status: <strong>Səbətdədir</strong></span>
                <span>Sifariş durumu: <strong>Sabit</strong></span>
                <span>Ümumi status: <strong>Gözləmədədir</strong></span>
                <h2 style={{color: "#303030"}}><span style={{color: 'slateblue'}}>{product.price}</span>azn</h2>
              </div>

              <div className="box button-submit">
                <button>Sifariş et</button>
              </div>
            </div>
            ))}
            </div>
      ) : (
        <div className="basket-container">
          <div className="no-product">
            <h5>
              <PiMaskSadDuotone style={{ fontSize: "3rem" }} />
              Əfsuslar olsun! Səbət boşdur.. Doldurmaq üçün alışverişə başla 😉
            </h5>
            <Link to='/' style={{textDecoration: 'none'}}><button>Seç və al</button></Link>
          </div>
        </div>
      )}
    </>
  );
}
