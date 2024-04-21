import React, { useState } from 'react'
import '../LoginRegister/index.scss';
import {VscGithub} from 'react-icons/vsc'
import {BiMailSend} from 'react-icons/bi'
import {CiFacebook} from 'react-icons/ci'
import {FiLinkedin} from 'react-icons/fi'
import {ImWhatsapp} from 'react-icons/im'
import { Link } from 'react-router-dom';
import {ToastContainer, toast, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

export default function Register() {
  const iconId = 'icons';
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {

    if (name === "" || email === "" || password === ""){
      return toast.warning("Heç bir xana boş buraxılmamalıdır!", {
          position: toast.POSITION.TOP_CENTER
        })
    }

    e.preventDefault();
    axios.post ("http://localhost:3001/aldiq-az-qeydiyyat", {
      name: name,
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.message === 'success'){
        toast.success("Qeydiyyat uğurla tamamlandı. Yönləndirilirsiniz..", {
          position: toast.POSITION.TOP_CENTER
        })
      } else if (response.data.message === '@') {
        toast.warning("Daxil etdiyiniz mail-ə @ işarəsi qoyulmalı və mümkün email-gmail standartlarına uyğun olmalıdır.",{
          position: toast.POSITION.TOP_CENTER
        })
      } else {
        return false;
      }





    }).catch((error) => console.log(error))
  }


  return (
    <div className='register-container'>
      <div className='form-top'>
        <div className='text'>
      <h5>QEYDİYYAT</h5>
        </div>
        <div className='links'>
      <span>Hesabın var?</span>
      <Link to='/aldiq-az-login'><h4>Daxil ol</h4></Link>
        </div>
      </div>
      <ToastContainer autoClose={2000} transition={Bounce} draggable={false}/>
      <div className='register-form'>
        <div className='social'>
          <div className='icons'>
          <Link style={{color: '#303030'}} to=''><BiMailSend id={iconId}/></Link>
          <Link style={{color: '#303030'}} to=''><VscGithub id={iconId}/></Link>
          <Link style={{color: '#303030'}} to=''><CiFacebook id={iconId}/></Link>
          <Link style={{color: '#303030'}} to=''><FiLinkedin id={iconId}/></Link>
          <Link style={{color: '#303030'}} to=''><ImWhatsapp id={iconId}/></Link>
          </div>
        </div>


        <form method='POST'>  
          <div className='input name-input'>
            <label>Adınız:</label>
            <input type='text' autoComplete='off' onChange={(e) => setName(e.target.value)} required/>
          </div>

          <div className='input email-input'>
            <label>E-mail:</label>
            <input type='email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} required/>
          </div>

          <div className='input password-input'>
            <label>Şifrə:</label>
            <input type='password' autoComplete='off' onChange={(e) => setPassword(e.target.value)} required/>
          </div>

          <button 
          type='submit'
          onClick={handleForm}
          className='button'>Qeydiyyat</button>

        </form>
      </div>
    </div>
  )
}
