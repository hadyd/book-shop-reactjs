import React, { Component } from "react";
import {Carousel, CarouselItem} from "react-bootstrap";
import Header from "./image/Header.jpg"
import Header2 from "./image/Header 2.jpg"
import Header3 from "./image/Header 3.jpg"

export class Crsl extends Component {
  render() {
    return (
      <div className="Car">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Header2}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Header}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Header3}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
      </div>
    );
  }
}

export default Crsl