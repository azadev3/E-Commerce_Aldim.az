import React from "react";
import "../Electronics/Electronics.scss";
import { Link } from "react-router-dom";
import { AiOutlineCaretRight } from 'react-icons/ai'

export default function Electronics() {
  const MenuItemsOne = [
    { id: 1, title: "Telefon" },
    { id: 2, title: "Planşet" },
    { id: 3, title: "Notebook" },
    { id: 4, title: "Televizor" },
    { id: 5, title: "Skuter" },
    { id: 6, title: "VR-Box" },
    { id: 7, title: "Stolüstü komputerlər" },
  ];
  const MenuItemsTwo = [
    { id: 8, title: "Komputer aksessuarları" },
    { id: 9, title: "Telefon aksessuarları" },
    { id: 13, title: "Planşet aksessuarları" },
    { id: 10, title: "Telefon hissələri" },
    { id: 11, title: "Komputer hissələri" },
    { id: 12, title: "Planşet hissələri" },
    { id: 14, title: "Elektrikli velosipedlər" },
  ];

  return (
    <div className="electronics">
      <span className="bar">Elektronika alətləri</span>
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
  );
}
