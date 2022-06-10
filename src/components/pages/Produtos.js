import React, { Component } from "react";
import Slider from "react-slick";
import Produto from './Product'
import Product from "./Product";
import Category from "./Category";
import Categories from "./Categories";

export default class Teste extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
        <h2> Responsive </h2>
        <Slider {...settings}>
        <Produto img1={ require('./Img/IMG-20220424-WA0009.jpg')} titulo='Samsung A12' descrição='Impress your girl with this, is simple that' valor='47.000,00'/>
        <br />
        <Produto img1={ require('./Img/transferir2.jpeg')} titulo='Iphone 3' descrição='A great cellphone to talk with her, yeah you know very well ...' valor='50.000,00'/>
        <br />
        <Produto img1={ require('./Img/images.jpeg')} titulo='Nokia S11' descrição='Impress your girl with this, is simple that' valor='324.999,00'/>
        <br />
        <Produto img1={ require('./Img/transferir2.jpeg')} titulo='Iphone 3' descrição='A great cellphone to talk with her, yeah you know very well ... ' valor='50.000,00'/>
        </Slider>
      </div>
    );
  }
}