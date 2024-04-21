import React, { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderBottom from "./Components/HeaderBottom/HeaderBottom";
import Main from "./Components/Content/Main";
import Footer from "./Components/Footer/Footer";
import AirJordan from "./Components/Pages/MostViewPages/AirJordan/AirJordan";
import DellLaptop from "./Components/Pages/MostViewPages/DellLaptop/DellLaptop";
import Jeans from "./Components/Pages/MostViewPages/DefactoJeans/Jeans";
import Iphone from "./Components/Pages/MostViewPages/Iphone13/Iphone";
import Basket from "./Components/Pages/MyBasket/Basket";
//logreg
import Register from './Components/Pages/LoginRegister/Register';
import Login from './Components/Pages/LoginRegister/Login';
//if is auth
import { TokenProvider } from "./Contextapi/Token";
import Profile from "./AuthenticationUser/Components/Profile";
import { AuthProvider } from "./Contextapi/Auth";
import Mehsullarim from "./AuthenticationUser/Pages/Mehsullarim";


export default function App() {

  return (
    <BrowserRouter>
        <TokenProvider>
          <AuthProvider>

      <div className="App">
    <Routes>
      <Route path="/" element={<React.Fragment><Header /><HeaderBottom /> <Main /><Footer /></React.Fragment>} />
      <Route path="/airjordan" element={<React.Fragment><Header /><HeaderBottom /><AirJordan/><Footer /></React.Fragment>} />
      <Route path="/laptop-dell" element={<React.Fragment><Header /><HeaderBottom /><DellLaptop/><Footer /></React.Fragment>} />
      <Route path="/jeans" element={<React.Fragment><Header /><HeaderBottom /><Jeans /><Footer /></React.Fragment>} />
      <Route path="/iphone" element={<React.Fragment><Header /><HeaderBottom /><Iphone /><Footer /></React.Fragment>} />
      <Route path="/sebetim" element={<React.Fragment><Header /><HeaderBottom /><Basket /><Footer /></React.Fragment>} />
      <Route path="/aldiq-az-qeydiyyat" element={<React.Fragment><Register /></React.Fragment>} />
      <Route path="/aldiq-az-login" element={<React.Fragment><Login /></React.Fragment>} />
      {/* is auth */}
      <Route path="/my-profile" element={<React.Fragment><Header/><HeaderBottom/><Profile /><Footer/></React.Fragment>} />
      <Route path="/mehsullar" element={<React.Fragment><Header/><HeaderBottom/><Profile /><Footer/></React.Fragment>} />
      <Route path="/sebetim" element={<React.Fragment><Header/><HeaderBottom/><Profile /><Footer/></React.Fragment>} />
      {/* is auth */}
    </Routes>
      </div>
          </AuthProvider>
        </TokenProvider>

    </BrowserRouter>
  );
}
