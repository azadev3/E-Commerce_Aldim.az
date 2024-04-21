import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar() {

     const Items = [
          {id: 1, title: 'Məhsullarım'},
          {id: 2, title: 'Səbət'},
          {id: 3, title: 'Xallarım'},
          {id: 4, title: 'Son sifarişlərim'},
          {id: 5, title: 'Gözləyənlər'},
          {id: 6, title: 'İradlar'},
          {id: 7, title: 'Digər'},
     ]

    

  return (
     <div className='sidebar'>
          {Items.map((items) => (
               <NavLink className='nav' key={items.id}>
                    {items.id === 1 && <NavLink style={{color: '#303030', textDecoration: 'none'}} 
                    to='/mehsullar'>{items.title}</NavLink>}
                    {items.id === 2 && <NavLink style={{color: '#303030', textDecoration: 'none'}} 
                    to='/sebetim'>{items.title}</NavLink>}
                    {items.id === 3 && <NavLink style={{color: '#303030', textDecoration: 'none'}} 
                    to=''>{items.title}</NavLink>}
                    {items.id === 4 && <NavLink style={{color: '#303030', textDecoration: 'none'}} 
                    to=''>{items.title}</NavLink>}
                    {items.id === 5 && <NavLink style={{color: '#303030', textDecoration: 'none'}} 
                    to=''>{items.title}</NavLink>}
                    {items.id === 6 && <NavLink style={{color: '#303030', textDecoration: 'none'}} 
                    to=''>{items.title}</NavLink>}
                    {items.id === 7 && <NavLink style={{color: '#303030', textDecoration: 'none'}} 
                    to=''>{items.title}</NavLink>}
               </NavLink>
          ))}
     </div>
  )
}
