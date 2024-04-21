import React, { useEffect, useState } from 'react'
import './HeaderBottom.scss';
import Search from './Search';
import HeaderBottomLeft from './HeaderBottomLeft';
import HeaderBottomRight from './HeaderBottomRight';

export default function HeaderBottom() {


  return (
    <div className='Header-Bottom'>
          <HeaderBottomLeft />
          <Search />
          <HeaderBottomRight />
    </div>
  )
}
