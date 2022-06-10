import React, { Component} from "react";
import Category from './Category'
import Slider from "react-slick";
import Cards from './Cards';
import { red } from '@mui/material/colors';

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
        <div >
          <h2> Responsive </h2>
                  
          <Slider {...settings}>
            <Cards img={ require('./Img/transferir.jpeg')} title='BuyMore' date='02/06/2022' letra='B' nome='Iphone 12' autor='Rui Paulo' numero='992 347 123' valor='230.000,00' description='gfg Parcídio Pascoal Macuto Quinguari'/>
            <Cards img={ require('./Img/transferir.jpeg')} title='BuyMore' date='02/06/2022' letra='B' nome='Iphone 12' valor='230.000,00' description='gfg Parcídio Pascoal Macuto Quinguari'/>
            <Cards img={ require('./Img/transferir.jpeg')} title='BuyMore' date='02/06/2022' letra='B' nome='Iphone 12' valor='230.000,00' description='gfg Parcídio Pascoal Macuto Quinguari'/>
            <Cards img={ require('./Img/transferir.jpeg')} title='BuyMore' date='02/06/2022' letra='B' nome='Iphone 12' valor='230.000,00' description='gfg Parcídio Pascoal Macuto Quinguari'/>
            
          </Slider>
        <br/>

            <h2>Never broke again</h2>
          <Slider {...settings} style={{background:'#00FFFF'}}>
            <Cards img={ require('./Img/IMG-20220424-WA0009.jpg')} title='BuyMore' date='02/06/2022' letra='B' nome='Iphone 12' valor=' VALOR: 230.000,00' description='Parcídio Pascoal Macuto Quinguari <br />'/>
            <Cards img={ require('./Img/transferir.jpeg')} title='BuyMore' date='02/06/2022' letra='B' nome='Iphone 12' valor='230.000,00' description='gfg Parcídio Pascoal Macuto Quinguari'/>
            <Cards img={ require('./Img/transferir.jpeg')} title='BuyMore' date='02/06/2022' letra='B' nome='Iphone 12' valor='230.000,00' description='gfg Parcídio Pascoal Macuto Quinguari'/>
            <Cards img={ require('./Img/transferir.jpeg')} title='BuyMore' date='02/06/2022' letra='B' nome='Iphone 12' valor='230.000,00' description='gfg Parcídio Pascoal Macuto Quinguari'/>
            
          </Slider>
        </div>
      );
    }
  }