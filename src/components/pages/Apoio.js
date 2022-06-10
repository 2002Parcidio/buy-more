import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Category from './Category';


function Apoio() {
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
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/vender'}>Vender</Link></li>
                        <li><Link to={'/comprar'}>Comprar</Link></li>
                        <li><Link to={'/servicos'}>Serviços</Link></li>
                        <li><Link to={'/apoio'} className='active'>Apoio</Link></li>
                    </div>
                    <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                          {isMobile ?
                            ( <i className='fas fa-times'></i> 
                             ) : ( <i className='fas fa-bars'></i> 
                          )}
                    </button>
            </div>

            <img
              className="d-block w-100"
              src={ require('./Img/Novo-Projeto.png')}
              alt="First slide"
            />
           
            <h2>Apoio ao cliente</h2>

            <section className='footer' style={{background:'#696969', padding:'40px 0', height:'245px'}}>
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
export default Apoio;