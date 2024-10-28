import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

const ImageCarousel = () => {
  return (
    <div>
      <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=800" // Replace with your image URL
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=800" // Replace with your image URL
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=800" // Replace with your image URL
          alt="Third slide"
        />
         <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
       
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ImageCarousel
