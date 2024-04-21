import React, { useState } from 'react'
import '../HouseEquipment/HouseEq.scss';
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { AiOutlineCaretRight } from 'react-icons/ai'

export default function HouseEquipment() {

  const BigmenuItems = [
    {id: 1, title: 'Paltaryuyan maşınlar'},
    {id: 2, title: 'Soyuducu'},
    {id: 3, title: 'Sobalar'},
    {id: 4, title: 'Qabyuyan maşınlar'},
    {id: 5, title: 'Tozsoran(böyük)'},
    {id: 6, title: 'Kondisioner'},
    {id: 7, title: 'Mikrodalğalı sobalar'},
    {id: 8, title: 'Su isidicilər'},
    {id: 9, title: 'Qızdırıcılar'},
    {id: 10, title: 'Digər'},
  ]

  const SmallmenuItems = [
    {id: 11, title: 'Ütülər'},
    {id: 12, title: 'Tosterlər'},
    {id: 13, title: 'Mikserlər'},
    {id: 14, title: 'Qəhvəüyüdən'},
    {id: 15, title: 'Tozsoran(kiçik)'},
    {id: 16, title: 'Blenderlar'},
    {id: 17, title: 'Mikrodalğalı sobalar'},
    {id: 18, title: 'Su arıtma cihazları'},
    {id: 19, title: 'Kiçik su qızdırıcılar'},
    {id: 20, title: 'Digər'},
  ]

  const AllMenuItems = BigmenuItems.concat(SmallmenuItems);
  const filteredItems = AllMenuItems.filter((other) => other.title !== "Digər");

  const mainMenuItems = [
    {id: 1, title: 'İri məişət'},
    {id: 2, title: 'Kiçik məişət'},
    {id: 3, title: 'Hamısı'},
  ];


  const [selectedMenu, setSelectedMenu] = useState('all');
  const handleMenu = (menu) => {
    setSelectedMenu(menu);
  }

  return (
     <div className='house-equipment-category'>


          <div className='category'>

            <div className='icon'>
              <AiOutlineDoubleRight id='categoryIcon'/>
            </div>

            <div className='bigEquipment'>
              {mainMenuItems.map((big) => (
                <Link
                 onClick={() => handleMenu('big')}
                 to="" 
                 key={big.id}
                 id='big'>
                  {big.title === "İri məişət" && big.title}
                </Link>
              ))}
            </div>

            <div className='smallEquipment'>
            {mainMenuItems.map((small) => (
                <Link
                 onClick={() => handleMenu('small')}
                 key={small.id}
                 to="" 
                 id='small'>
                  {small.title === "Kiçik məişət" && small.title}
                </Link>
              ))}
            </div>

            <div className='all'>
              {mainMenuItems.map((all) => (
                <Link
                onClick={() => handleMenu('all')}
                key={all.id}
                to=""
                id='all'>
                  {all.title === "Hamısı" && all.title}
                </Link>
              ))}
            </div>

          </div>

          

          <div className='links'>
        <div className='bigmenu' style={{ display: selectedMenu === 'big' ? 'flex' : 'none' }}>
          {BigmenuItems.map((item) => (
            <Link id='link' to='' key={item.id}>
              <AiOutlineCaretRight />{item.title}
            </Link>
          ))}
        </div>
        <div className='smallmenu' style={{ display: selectedMenu === 'small' ? 'flex' : 'none' }}>
          {SmallmenuItems.map((item) => (
            <Link id='link' to='' key={item.id}>
              <AiOutlineCaretRight/>{item.title}
            </Link>
          ))}
        </div>
        <div className='allmenu' style={{ display: selectedMenu === 'all' ? 'flex' : 'none', }}>
          {filteredItems.map((item) => (
            <Link id='link' to='' key={item.id}>
              <AiOutlineCaretRight/>{item.title}
            </Link>
          ))}
        </div>
      </div>
     </div>
  )
}

