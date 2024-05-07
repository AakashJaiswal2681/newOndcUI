import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
   return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    >
      <div className="image1">
        <img src="http://localhost:3000/assets/photo1.jpg" alt="Slide 1" />
      </div>
      <div className="image2">
        <img src="http://localhost:3000/assets/photo2.jpg" alt="Slide 2" />
      </div>
      <div className="image2">
        <img src="http://localhost:3000/assets/photo3.jpg" alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
