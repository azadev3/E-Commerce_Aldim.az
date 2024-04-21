import React from 'react'
import '../MenWear/MenWear.scss';
import { Link } from 'react-router-dom';
import { AiOutlineCaretRight } from 'react-icons/ai'

export default function MenWear() {


     const MenuItemsOne = [
          { id: 1, title: "Kepkalar" },
          { id: 2, title: "Koftalar" },
          { id: 3, title: "T-shirtlər" },
          { id: 4, title: "Cins şalvarlar" },
          { id: 5, title: "Oversize geyimlər" },
          { id: 6, title: "Sweatshirt" },
          { id: 7, title: "Krassovkalar" },
        ];
        const MenuItemsTwo = [
          { id: 8, title: "Botlar" },
          { id: 9, title: "Gözlüklər" },
          { id: 10, title: "Qolbaqlar & Seplər" },
          { id: 11, title: "Üzüklər & Saatlar" },
          { id: 12, title: "Hərbi geyimlər" },
          { id: 13, title: "Parfumeriya" },
        ];

  return (
     <div className='men-wear'>
      <span className="bar">Kişi geyimləri & aksessuarlar & parfum</span>
      <div className="cat1">
        {MenuItemsOne.map ((one) => (
          <Link to='' id="links" key={one.id}>
            <AiOutlineCaretRight/>{one.title}
          </Link>
        ))}
      </div>
      <div className="cat2">
      {MenuItemsTwo.map ((two) => (
          <Link to='' id="links" key={two.id}>
            <AiOutlineCaretRight/>{two.title}
          </Link>
        ))}
      </div>
     </div>
  )
}
