import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderBottomLeft() {

     const contactInfos = [
          {id: 1, title: 'Dəstək bölümü'},
          {id: 2, title: 'Bizi dəyərləndir'},
          {id: 3, title: 'Payment'},
     ];

  return (
    <div className="header-bottom-left">
          {contactInfos.map ((items) => (
               <nav className='contact-us' key={items.id}>
                    <Link to='' id='contact'>{items.id === 1 && items.title}</Link>
                    <Link to='' id='contact'>{items.id === 2 && items.title}</Link>
                    <Link to='' id='contact'>{items.id === 3 && items.title}</Link>
               </nav>
          ))}
    </div>
  )
}
