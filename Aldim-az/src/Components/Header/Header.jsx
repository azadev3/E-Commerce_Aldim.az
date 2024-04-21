import React, { useRef } from "react";
import "./Header.scss";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";

export default function Header() {
  return (
    <div className="Header">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
}
