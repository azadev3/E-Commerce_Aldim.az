import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contextapi/Auth';

export default function HeaderRight() {

  const { auth } = useContext(AuthContext);

     const RegisterLogin = [
          {id: 1, name: 'Qeydiyyat'},
          {id: 2, name: 'Daxil ol'},
     ];

  return (
    <div className='header-right' style={{display: auth ? 'none' : null}}>
      {RegisterLogin.map ((items) => (
        <nav className='Register_Login_Items' key={items.id}>
          <Link to='/aldiq-az-qeydiyyat' id='registerButton'>{items.id === 1 && items.name}</Link>
          <Link to='/aldiq-az-login' id='loginButton'>{items.id === 2 && items.name}</Link>
          </nav>
      ))}
    </div>
  )
}
