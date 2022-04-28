import React, { Component } from "react";
import Slider from "react-slick";
import Product from "./Product";

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
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
        <Product img={ require('./Img/transferir.jpeg')} titulo='Samsung A12' descrição='fjdsfhskhkdsfhkasjh' />
        <Product img={ require('./Img/transferir2.jpeg')} titulo='Iphone 3' descrição='A great cellphone to talk with her, yeah you know very well how it is works' valor='50.000,00'/>
        <Product img={ require('./Img/images.jpeg')} titulo='Nokia S11' descrição='Impress your girl with this, is simple that' valor='324.999,00'/>
        <Product img={ require('./Img/transferir2.jpeg')} titulo='Iphone 3' descrição='A great cellphone to talk with her, yeah you know very well how it is works' valor='50.000,00'/>
         
        
          
        </Slider>
      </div>
    );
  }
}