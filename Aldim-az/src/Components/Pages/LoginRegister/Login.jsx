import React, { useContext, useEffect, useState } from 'react'
import '../LoginRegister/index.scss';
import {VscGithub} from 'react-icons/vsc'
import {BiMailSend} from 'react-icons/bi'
import {CiFacebook} from 'react-icons/ci'
import {FiLinkedin} from 'react-icons/fi'
import {ImWhatsapp} from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer, toast, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { TokenContext } from '../../../Contextapi/Token';

export default function Login() {
  const {tokenState, setTokenState } = useContext(TokenContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hideButton, setHideButton] = useState(false);
  const navigate = useNavigate();
  
  ;
  const handleLogin = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:3001/aldiq-az-login', {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message === 'success' && response.data.token && response.data.useremail){
        const token = response.data.token;
        const useremail = response.data.useremail
        setTokenState(token);
        localStorage.setItem('tkn', token);
        localStorage.setItem('user', useremail);
        navigate('/my-profile');
        return toast.success("Giriş tamamlandı!", {
          position: toast.POSITION.TOP_CENTER
        });
      } else if (response.data.message === "false"){
        return toast.warning("Girdiklərinizə uyğun məlumat tapılmadı.", {
          position: toast.POSITION.TOP_CENTER
        });
      } else if (response.data.message === "empty") {
        return toast.warning("Xanalar doldurulmalıdır!", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }).catch((error) => console.log(error));
  
    setHideButton(true);
    setTimeout(() => {
      setHideButton(false);
    }, 3000);
  }

  const iconId = 'icons'
  
  return (
    <div className='login-container'>
      <h5>GİRİŞ</h5><Link to='/aldiq-az-qeydiyyat'>Qeydiyyat'a dön</Link>
      <div className='login-form'>
      <ToastContainer autoClose={2000} transition={Bounce} draggable={false}/>
        <div className='social'>
          <div className='icons'>
          <Link style={{color: '#303030'}} to=''><BiMailSend id={iconId}/></Link>
          <Link style={{color: '#303030'}} to=''><VscGithub id={iconId}/></Link>
          <Link style={{color: '#303030'}} to=''><CiFacebook id={iconId}/></Link>
          <Link style={{color: '#303030'}} to=''><FiLinkedin id={iconId}/></Link>
          <Link style={{color: '#303030'}} to=''><ImWhatsapp id={iconId}/></Link>
          </div>
        </div>


        <form>  
          <div className='input email-input'>
            <label>E-mail:</label>
            <input type='email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='input password-input'>
            <label>Şifrə:</label>
            <input type='password' autoComplete='off' onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button 
          style={{marginTop: '2rem'}}
          type='submit'
          disabled={hideButton === true}
          id={hideButton ? 'disablebtn' : null}
          onClick={handleLogin}
          className='button'>
            Qeydiyyat
          </button>

        </form>
      </div>
    </div>
  )
}
