import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import '../../AuthenticationUser/Components/Profile.scss';
import { AuthContext } from "../../Contextapi/Auth";
import Sidebar from "./Sidebar/Sidebar";
import Mehsullarim from "../Pages/Mehsullarim";
import Basket from "../../Components/Pages/MyBasket/Basket";

export default function Profile() {
     const { auth, setAuth } = useContext(AuthContext);
  const token = localStorage.getItem("tkn");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setAuth(true);
      navigate("/my-profile");
    } else {
      setAuth(false);
      navigate("/aldiq-az-login");
    }
  }, [auth]);

  return auth &&
  <div className="profile-user">
     <Sidebar />
     <Mehsullarim />
  </div>;
}
