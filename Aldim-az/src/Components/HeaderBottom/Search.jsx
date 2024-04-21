import React, { useEffect, useState, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import Data from '../../items.json';
import { Link } from 'react-router-dom';

export default function Search() {

  const [searchItem, setSearchItem] = useState("");
  const [showDataclass, setShowDataclass] = useState(false);
  const dataContainerRef = useRef(null);
  const msg = <h1>salam</h1>

  const items = Object.values(Data).flatMap((category) => category);
  const filteredItems = items.filter((values) => {
    if(searchItem === ""){
      return msg;
    } else if (values.model.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    const handleclickoutside = (e) => {
      if (dataContainerRef.current && !dataContainerRef.current.contains(e.target)){
        setShowDataclass(false);
      } else {
        setShowDataclass(true)
      }
    }
    document.addEventListener("mousedown", handleclickoutside);
    return () => {
      document.removeEventListener("mousedown", handleclickoutside);
    }


  },[showDataclass])

  const handleSearch = (e) =>{
    setSearchItem(e.target.value)
    setShowDataclass(true);
  }




  return (
    <div className='search'>
      <div className='search-area'>
        <BsSearch id='search-icon'/>
        <input
        id='search'
          type='search'
          placeholder='məhsul axtar...'
          onChange={handleSearch}
          autoComplete='off'
          onClick={handleSearch}
        />
      </div>

      <div className={showDataclass ? 'active data-container' : 'data-container'} ref={dataContainerRef}>
        {filteredItems.map((items) => (
          <div className='datas' key={items.id}>
            <Link
            style={{color: "#303030"}}
            to={items.id === 1 ? '/laptop-dell' : items.id === 2 ? '/airjordan' : items.id === 3 ? '/jeans' : items.id === 4 ? '/iphone' : ""}>
              <h3>{items.model}</h3>
            </Link>
            

            <img src={items.image} id={items.id === 3 ? 'jeans' : items.id === 2 ? 'nike' : items.id === 1 ? 'laptop' : items.id === 4 ? "phone" : ""}/>
            <span><strong>{items.price}</strong><span>azn</span></span>
          </div>
        ))}
      </div>


      
    </div>
  );
}
