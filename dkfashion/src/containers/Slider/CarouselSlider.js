import React from "react";
import Carousel from "react-bootstrap/Carousel";
//import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "./images/one.jpg";
// import img2 from "./images/two.jpg";
// import img3 from "./images/three.jpg";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";

const CarouselSlider = (props) => {
  return (
    <Carousel controls={false} fade={true}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img2} alt="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img5} alt="Second slide" />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img4} alt="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselSlider;
