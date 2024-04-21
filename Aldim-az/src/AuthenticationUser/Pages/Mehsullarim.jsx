import React, { useEffect, useState } from "react";
import axios from "axios";

const Mehsullarim = () => {
  const [data, setData] = useState([]);
  const [isBasket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const laptopResponse = await axios.get("http://localhost:3000/laptops");
        const shoesResponse = await axios.get("http://localhost:3000/shoes");
        const jeansResponse = await axios.get("http://localhost:3000/jeans");
        const phoneResponse = await axios.get("http://localhost:3000/phones");
        const datas = [
          ...laptopResponse.data,
          ...shoesResponse.data,
          ...jeansResponse.data,
          ...phoneResponse.data,
        ];
        setData(datas);
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
    setBasket(trueKeys);
  }, []);

  return (
    <div className="mehsullar">
      {isBasket.length > 0 && (
        data.filter((products) => isBasket.includes(`basket_${products.id}`)).map((items) => (
            <div className="basketing" key={items.id}>
               <img src={items.image} alt={items.model} style={{width: '8%'}}/>
               <div className="date">
               <h6>{items.model}</h6>
               <div className="box button-submit">
                <button>İndi sifariş et</button>
               </div>
               </div>
               <h5>{items.price}azn</h5>
            </div>
          ))
      )}
    </div>
  );
};

export default Mehsullarim;
