import React from "react";
import "../MostView/MostView.scss";
import { Link } from "react-router-dom";

export default function MostView() {

     const MostViewedItems = [
          {
          id: 1, title: 'Nike Air Force',
          img: 'nikeairforce.png',
          desc: 'Yalnız bu həftə orijinal AIR FORCE cəmi 179 manat!',
          price: '179azn'
          },

          {
          id: 2, title: 'Jeans for MEN',
          img: 'jeans.png',
          desc: 'DEFACTO Endirimi! Jeanslər cəmi 39manat!',
          price: '39azn'
          },
          
          {
          id: 3, title: 'Iphone 13 Pro Max (256gb)',
          img: 'iphone.png',
          desc: 'Bütün Iphone modellərinə 20% endirim!',
          price: '1299azn'
          },

          {
          id: 4, title: 'Dell Latitude 5490',
          img: 'dell.png',
          desc: 'Intel Core i7, 16GB, 1TB, Windows 11 x64, 849azn !',
          price: '849azn'
          }
           
     ];

     const nike = MostViewedItems.filter((nike) => nike.id === 1);
     const jeans = MostViewedItems.filter((jeans) => jeans.id === 2);
     const iphone = MostViewedItems.filter((iphone) => iphone.id === 3);
     const laptop = MostViewedItems.filter((laptop) => laptop.id === 4);

  return (
    <div className="most-viewed">
     <section className="nikeAirforce">
          {nike.map((nike) => (
               <div className="card" key={nike.id}>
                    <img src="bluejordan.png" alt="nike" style={{width: '100%'}}/>
                   <Link target="_BLANK" to='/airjordan'><p>{nike.desc}</p></Link>
                    <h5>{nike.price}</h5>
               </div>
          ))}
     </section>

     <section className="jeans">
     {jeans.map((jeans) => (
               <div className="card" key={jeans.id}>
                    <img src={jeans.img} alt="jean" />
                    <Link target="_BLANK" to='/jeans'><p>{jeans.desc}</p></Link>
                    <h5>{jeans.price}</h5>
               </div>
          ))}
     </section>

     <section className="iphone">
     {iphone.map((iphone) => (
               <div className="card" key={iphone.id}>
                    <img src={iphone.img} alt="iphone" />
                    <Link target="_BLANK" to='/iphone'><p>{iphone.desc}</p></Link>
                    <h5>{iphone.price}</h5>
               </div>
          ))}
     </section>

     <section className="laptop">
     {laptop.map((laptop) => (
               <div className="card" key={laptop.id}>
                    <img src={laptop.img} alt="nike" />
                    <Link target="_BLANK" to='/laptop-dell'><p>{laptop.desc}</p></Link>
                    <h5>{laptop.price}</h5>
               </div>
          ))}
     </section>
    </div>
  );
}
