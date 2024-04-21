import React, { useEffect, useState } from 'react'
import '../mostviewpage.scss';
import { GiPriceTag } from 'react-icons/gi';
import BuyButton from '../../BuyButton';
import axios from 'axios';
import ButtonFavorites from '../../ButtonFavorites';

const Iphone = () => {
useEffect(() => {
     setTimeout(() => {
       scrollTo(0, 0);
     }, 0);
   },[])
 
 
   const [data, setData] = useState(null);
   useEffect (() => {
     axios.get("http://localhost:3000/phones", {
     }).then ((response) => {
       if (response.data[0]) {
         const jsonData = response.data[0];
         setData(jsonData);
       }
     }).catch ((error) => {
       console.log(error);
     })
   }, [])


  return (
     <div className='main-card'>
{data && (
        <div className='container'>
          <div className='card'>
            <img
            src={data.image} alt='jeans not found. pls try again later!' />
            <strong>{data.model}</strong>
            <h4 style={{color: 'mediumslateblue'}}><GiPriceTag /><strong>{data.price}</strong>azn</h4>
            <BuyButton product={data}/>
          </div>
           <div className='description'>
              <div className='box header'>
                <h4>Bütün xüsusiyyətlər:</h4>
                <span>{data.model}</span>
              </div>
              <div className='box section'>
                <ButtonFavorites />
              </div>
              <div className='box foot'>
                <div className='area'>
                  <div className='section titles'>Malın xüsusiyyətləri</div>
                  <div className='section props'>Malın çatdırılması</div>
                </div>
              </div>

              <div className='box properties'>
                <article className='box props'>
                  <h5>Əməliyyat sistemi:</h5><span>{data.properties.system}</span>
                  <h5>Mövcud rənglər:</h5><span>{data.properties.color}</span>
                  <h5>Çəki:</h5><span>{data.weight}</span>
                  <h5>Ram:</h5><span>{data.properties.ram}</span>
                  <h5>Processor:</h5><span>{data.properties.processor}</span>
                  <h5>Yaddaş:</h5><span>{data.properties.storage}</span>
                </article>


                <article className='box delivery'>
                <h5>Çatdırılma:</h5><span>Mövcuddur</span>
                  <h5>Dəyişdirilmə:</h5><span>Yalnız 1 gün içərisində</span>
                  <h5>Qaytarılma:</h5><span>Yoxdur</span>
                  <h5>Keyfiyyətə zəmanət:</h5><span>2 Həftə</span>
                </article>
              </div>
          </div>
        </div>
)}
    </div>
  )
}

export default Iphone;