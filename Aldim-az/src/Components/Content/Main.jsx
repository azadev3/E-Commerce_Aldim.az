import React from "react";
import "../Content/Main.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MostView from '../Content/MostView/MostView';

export default function Main() {
  return (
    <div className="main-container">
      <Carousel className="carousel" autoPlay infiniteLoop>
        <div>
          <img src="carimg.svg" />
        </div>
        <div>
          <img src="carimg2.svg" />
        </div>
        <div>
          <img src="carimg3.svg" />
        </div>
      </Carousel>
      <MostView />
    </div>
  );
}
