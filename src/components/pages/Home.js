import React from 'react';
import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'
import Teste from './Teste';

function Home() {
    return (
        <div className='App'>
            <div className='App-header'>
                <div className='logo'><p>BuyMore</p></div>
                    <div className='link-header'>
                        <li><Link to={'/'} className='active'>Home</Link></li>
                        <li><Link to={'/vender'}>Vender</Link></li>
                        <li><Link to={'/comprar'}>Comprar</Link></li>
                        <li><Link to={'/apoio'}>Apoio</Link></li>
                    </div>
            </div>

            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require('./Img/Novo-Projeto.png')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require('./Img/great&better.png')}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require('./Img/IMG_20200425_171723_286.png')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        <section id='vendas&compras-home'>
            <div className='vendas-home'>
                <h2>Vendas seguras</h2>
                <p>Aqui na BuyMore tu podes vender seus produtos de forma segura e rápida seguido de um taxa adicional dependente do produto.</p>
            </div>

            <div className='compras-home'>
                <h2>Compra de confiança</h2>
                <p>Aqui na BuyMore tu podes vender seus produtos de forma segura e rápida seguido de um taxa adicional dependente do produto.</p>
            </div>
        </section>


        <section>
        <div className='container mt-5 carousel'>
          <Teste />
        </div>
        </section>
            
            </div>
    );
}
export default Home;