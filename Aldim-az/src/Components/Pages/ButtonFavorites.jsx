import React from 'react'
import '../Pages/MostViewPages/mostviewpage.scss';
import { Link } from 'react-router-dom';

const ButtonFavorites = () => {
  return (
     <div className='box section'>
     <div className='buttons'>
     <Link to='/sebetim' target='_BLANK'><button>Səbətə keçid</button></Link>
     <button>Seçilmişlərə əlavə et</button>
     <button>Bizimlə əlaqə yarat</button>
     </div>
     </div>
  )
}

export default ButtonFavorites