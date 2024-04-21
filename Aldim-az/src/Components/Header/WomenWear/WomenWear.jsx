import React from 'react'
import '../WomenWear/WomenWear.scss';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function WomenWear() {

     const MenuItemsOne = [
          { id: 1, title: "Şapkalar" },
          { id: 2, title: "Ətəklər" },
          { id: 3, title: "Oymalar" },
          { id: 4, title: "Yaylıqlar" },
          { id: 5, title: "Hicab geyimləri" },
          { id: 6, title: "Cins şalvarlar" },
          { id: 7, title: "Ayaqqabılar" },
        ];
        const MenuItemsTwo = [
          { id: 8, title: "Krassovkalar" },
          { id: 9, title: "Gözlüklər" },
          { id: 10, title: "Qolbaqlar & Sep & Sırğa" },
          { id: 11, title: "Üzüklər & Saatlar" },
          { id: 12, title: "T-shirtlər" },
          { id: 13, title: "Sweatshirt" },
          { id: 14, title: "Parfumeriya" },
        ];

  return (
    <div className='women-wear'>
          <span className="bar">Qadın üçün geyim & aksessuarlar & parfum</span>
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
