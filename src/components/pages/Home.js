import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'
import Produto from './Product';
import { fontSize, padding } from '@mui/system';


function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // change nav color when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)


    return (
        <div className='App'>
             <div className={color ? 'App-header App-header-bg' : 'App-header'}>
                <div className='logo'><p>BuyMore</p></div>
                    <div className={isMobile ? 'link-header-mobile' : 'link-header'} onClick={() => setIsMobile(false)}>
                        <li><Link to={'/'} className='active'>Home</Link></li>
                        <li><Link to={'/vender'}>Vender</Link></li>
                        <li><Link to={'/comprar'}>Comprar</Link></li>
                        <li><Link to={'/servicos'}>Serviços</Link></li>
                        <li><Link to={'/apoio'}>Apoio</Link></li>
                    </div>
                    <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                          {isMobile ?
                            ( <i className='fas fa-times'></i> 
                             ) : ( <i className='fas fa-bars'></i> 
                          )}
                    </button>
            </div>

          
            <br />
            <br />
            <Carousel variant="dark" style={{}}>
              <Carousel.Item style={{position:''}}>
                <img
                  className="d-block w-100"
                  src={ require('./Img/IMG_20200425_171723_286.png')}
                  alt="First slide"
                  position='absolute'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ require('./Img/great&better.png')}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ require('./Img/Novo-Projeto.png')}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

          <section id='vendas&compras-home'>
            <Link to={'/vender'}>Vender</Link>
            <div className='vendas-home'>
            <Link to={'/vender'}><h2>Vendas seguras</h2>
            <p style={{color:'#23232e'}}>Aqui na BuyMore tu podes vender seus produtos de forma segura e rápida seguido de um taxa adicional dependente do produto.</p>
            </Link>
            </div>

            <div className='compras-home'>
              <h2>Compra de confiança</h2>
              <p>BuyMore seus produtos de forma segura e rápida seguido de um taxa adicional dependente do produto.</p>
            </div>
          </section>


        <section >
        <div className='container mt-5 carousel' style={{position:'static'}}>
        <Produto img1={ require('./Img/IMG-20220424-WA0009.jpg')} titulo='Samsung A12' descrição='Impress your girl with this, is simple that' valor='47.000,00'/>
        <br />
        <Produto img1={ require('./Img/transferir2.jpeg')} titulo='Iphone 3' descrição='A great cellphone to talk with her, yeah you know very well ...' valor='50.000,00'/>
        <br />
        <Produto img1={ require('./Img/images.jpeg')} titulo='Nokia S11' descrição='Impress your girl with this, is simple that' valor='324.999,00'/>
        <br />
        <Produto img1={ require('./Img/transferir2.jpeg')} titulo='Iphone 3' descrição='A great cellphone to talk with her, yeah you know very well ... ' valor='50.000,00'/>
        </div>

        <div className='Produto'>
          
        <Produto img1={ require('./Img/IMG-20220424-WA0009.jpg')} titulo='Samsung A12' descrição='Impress your girl with this, is simple that' valor='47.000,00'/>
        <br />
        <Produto img1={ require('./Img/transferir2.jpeg')} titulo='Iphone 3' descrição='A great cellphone to talk with her, yeah you know very well ...' valor='50.000,00'/>
        <br />
        <Produto img1={ require('./Img/images.jpeg')} titulo='Nokia S11' descrição='Impress your girl with this, is simple that' valor='324.999,00'/>
        <br />
        <Produto img1={ require('./Img/transferir2.jpeg')} titulo='Iphone 3' descrição='A great cellphone to talk with her, yeah you know very well ... ' valor='50.000,00'/>
        </div>

      
        </section>
        <br />
        
            
        
        <section className='footer' style={{background:'#696969', padding:'40px 0', height:'100%'}}>
          <div className='social' style={{textAlign:'center', paddingBottom:'25px', color:'antiquewhite'}}>
            <a href='#'><i className='fab fa-instagram' style={{color:'antiquewhite', fontSize:'30px'}}></i></a>
            <a href='#'><i className='fab fa-facebook-f' style={{color:'antiquewhite', fontSize:'30px', marginLeft:'2%'}}></i></a>
            <a href="https://wa.me/921221130" class="whatsapp_float" target="_blank" rel="noopener noreferrer"><i className='fab fa-whatsapp' style={{color:'antiquewhite', fontSize:'30px', marginLeft:'2%', }}></i></a>
          </div>
          <ul className='footer-link' style={{marginTop:'0', padding:'0', listStyle:'none', lineHeight:'1.4', textAlign:'center'}}>
            <Link to={'/'}><p style={{display:'inline-block', padding:'0 25px', color:'antiquewhite'}}>Home</p></Link>
            <Link to={'/vender'}><p style={{display:'inline-block', padding:'0 25px', color:'antiquewhite'}}>Vender</p></Link>
            <Link to={'/comprar'}><p style={{display:'inline-block', padding:'0 25px', color:'antiquewhite'}}>Comprar</p></Link>
            <Link to={'/servicos'}><p style={{display:'inline-block', padding:'0 25px', color:'antiquewhite'}}>Serviços</p></Link>
            <Link to={'/apoio'}><p style={{display:'inline-block', padding:'0 25px', color:'antiquewhite'}}>Apoio ao Cliente</p></Link>
          </ul>
          <div className='copyright' style={{textAlign:'center', marginTop:'45px'}}>
            <p style={{color:'antiquewhite'}}>BuyMore @ 2022</p>
          </div>
        </section>
            </div>
    );
}
export default Home;