import React from 'react'
import '../Footer/Footer.scss';
import { FcAbout } from 'react-icons/fc'
import { AiTwotoneShopping } from 'react-icons/ai'
import { BsBorderAll, BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {GrFacebook, GrInstagram} from 'react-icons/gr'
import {FaGithubSquare} from 'react-icons/fa'


export default function Footer() {

     const aboutSite = [
          {id: 1, title: 'Hüquqlar'},
          {id: 2, title: 'Müddəalar'},
          {id: 3, title: 'Saytın kopyalanması'},
          {id: 4, title: 'Əsas anlayışlar'},
          {id: 5, title: 'Digər məlumatlar'},
     ];

     const buyRules = [
          {id: 1, title: 'Necə alışveriş edə bilərəm?'},
          {id: 2, title: 'Alışverişin qaydaları'},
          {id: 3, title: 'Qanun pozuntuları nəticələri'},
          {id: 4, title: 'Kart hesabınızın təhlükəsizliyi'},
          {id: 5, title: 'Fırıldaqçılardan qorunma'},
     ];

     const allRules = [
          {id: 1, title: 'Ümumi təhlükəsizlik'},
          {id: 2, title: 'Əlaqə'},
          {id: 3, title: 'Endirimlər'},
          {id: 4, title: 'Kampaniyalar'},
          {id: 5, title: 'Bonuslar haqqında'},
     ];

  return (
    <footer className='footer'>
          <section className='area1'>
               <h6>Sayt haqqında <FcAbout /></h6>
               {aboutSite.map((arrays) => (
                    <Link 
                    key={arrays.id}
                    to='' 
                    id='links'>{arrays.title}</Link>
               ))}
          </section>
          <section className='area2'>
          <h6>Alışveriş <AiTwotoneShopping /></h6>
               {buyRules.map((rules) => (
                    <Link 
                    key={rules.id}
                    to='' 
                    id='links'>{rules.title}</Link>
               ))}
          </section>
          <section className='area3'>
          <h6>Ümumi <BsBorderAll /></h6>
               {allRules.map((allrules) => (
                    <Link 
                    key={allrules.id}
                    to='' 
                    id='links'>{allrules.title}</Link>
               ))}
          </section>
          <span className='more'>
               Bu saytın bütün hüquqları Azad Mirheydərzadə'yə aiddir. &copy; 2023
          </span>
          <span className='telephone-email'>
               <h6>Telefon: +994 51 364 1920</h6>
               <h6>Email: azad.miri6@gmail.com</h6>
               <span className='icons'>
               <Link to='https://github.com/azadikk' id='icon' target='_BLANK'><FaGithubSquare /></Link>
               <Link to='https://www.linkedin.com/in/azad-mirheydarzada-4aa1a9279/' id='icon' target='_BLANK'><BsLinkedin /></Link>
               <Link to='https://www.facebook.com/AzadRapGoood/' id='icon' target='_BLANK'><GrFacebook /></Link>
               <Link to='https://www.instagram.com/azaad.dd/' id='icon' target='_BLANK'><GrInstagram /></Link>
               </span>
          </span>
    </footer>
  )
}
