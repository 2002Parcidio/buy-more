import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Email from './Email';
import emailjs from 'emailjs-com';

const Vender=()=>{

  const [dinheiro, setDinheiro] = useState (Number);  

  // Email config
        function sendemail(e){
            e.preventDefault();
    
        emailjs.sendForm('service_fka6th4', 'template_lwefc4y', e.target, 'ezu_Pdyi_00sKq-QF')
          .then((result) => {
              alert('Mensagem enviada com sucesso');
          }, (error) => {
              alert(error.message);
          });
          e.target.reset();
        }

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


   
    function somar () {
      var valor = document.getElementById('money')
      var valor1 = Number(valor.value)
      var total1 = valor1  * 7 /100
      var total11 = valor1 - total1

      var valor2 = Number(valor.value)
      var total2 = valor2 * 10 /100
      var total21 = valor2 - total2

      if (valor1 <= 50000) setDinheiro( total11 ) 
      else if (valor2 > 50000)  setDinheiro (total21)
    } 
    const Percentagem = () => {
      
    return (
      <>
      <div style={{textAlign:'center'}}>
        <p></p>
        <h5>Digite o valor que pretende vender (<span style={{color:'red'}}>Nota: <span style={{color:'black'}}>Digitar valor sem vírgulas e pontos</span></span>)</h5>
        <input type='number' id='money' placeholder='Digite o valor sem ponto' style={{width:'35%', height:'40px', backgroundColor:'#696969', color:'antiqueWhite', fontSize:'15px'}}/>
        <button onClick={somar} className="btn btn-dark" style={{backgroundColor:'#696969', color:'antiqueWhite', height:'40px', justifyContent:'center'}}>Ver resultado</button>
        <h5> O valor que irá receber é de {dinheiro} </h5>
        </div>
      </>
    )
  }


    return (
        <div className='App'>
            <div className={color ? 'App-header App-header-bg' : 'App-header'}>
                <div className='logo'><p>BuyMore</p></div>
                    <div className={isMobile ? 'link-header-mobile' : 'link-header'} onClick={() => setIsMobile(false)}>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/vender'} className='active'>Vender</Link></li>
                        <li><Link to={'/comprar'}>Comprar</Link></li>
                        <li><Link to={'/servicos'}>Serviços</Link></li>
                        <li><Link to={'/apoio'}>Apoio</Link></li>
                        <li><Link to={'/carrinho'}><i class='fas fa-shopping-cart' /></Link></li>
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
            src={ require('./Img/vendasimg.jpg')}
            alt="First slide"
          />

          <h2>Aqui é o lugar certo para publicar e vender</h2>

          <div className='shopcart' style={{marginTop:'2%', marginBottom:'1%'}}>
              <Link to={'/carrinho'}><i class='fas fa-shopping-cart' style={{color:'#696969', position:'fixed', float:'right', fontSize:'40px'}}/></Link>
          </div>
              
          {Percentagem()}
          
  
          <Email />

        <section className='email-config1'>
          <div className='container border' style={{width:'50%', background:'#696969'}}>
            <h1 style={{color:'antiquewhite', textAlign:'center'}}>Contact form</h1>
          <form className='row' style={{margin:' 5px 15px 10px 15px'}} onSubmit={sendemail}>
            <label style={{color:'antiquewhite'}}>Nome</label>
              <input type="text" name="name" className='form-control'/>
            <label style={{color:'antiquewhite'}}>Telemóvel</label>
              <input type="number" name="phone" className='form-control'/>
            <label style={{color:'antiquewhite'}}>Email</label>
              <input type="email" name="user_email" className='form-control'/>
            <label style={{color:'antiquewhite'}}>Mensagem</label>
              <input type="message" name='message' row="3" className='form-control'/>
            <button type='submit' className='form-control btn btn-primary' style={{background:"#00FFFF", color:'#23232e', marginTop:'30px'}}>Enviar</button>    
          </form>
          </div>
        </section>

        <section className='email-config2'>
          <div className='border' style={{width:'100%', background:'#696969'}}>
            <h1 style={{color:'antiquewhite', textAlign:'center'}}>Contact form</h1>
          <form className='row' style={{margin:' 5px 15px 10px 15px'}} onSubmit={sendemail}>
            <label style={{color:'antiquewhite'}}>Nome</label>
              <input type="text" name="name" className='form-control'/>
            <label style={{color:'antiquewhite'}}>Telemóvel</label>
              <input type="number" name="phone" className='form-control'/>
            <label style={{color:'antiquewhite'}}>Email</label>
              <input type="email" name="user_email" className='form-control'/>
            <label style={{color:'antiquewhite'}}>Mensagem</label>
              <input type="message" name='message' row="3" className='form-control'/>
            <button type='submit' className='form-control btn btn-primary' style={{background:"#00FFFF", color:'#23232e', marginTop:'30px'}}>Enviar</button>
          </form>
          </div>
        </section>


        <br />




        <section className='footer' style={{background:'#696969', padding:'40px 0', height:'245px'}}>
          <div className='social' style={{textAlign:'center', paddingBottom:'25px', color:'antiquewhite'}}>
            <a href='https://www.instagram.com/mesc_buymore?igshid=YmMyMTA2M2Y='><i className='fab fa-instagram' style={{color:'antiquewhite', fontSize:'30px'}}></i></a>
            <a href='https://www.facebook.com/mescbuymore/'><i className='fab fa-facebook-f' style={{color:'antiquewhite', fontSize:'30px', marginLeft:'2%'}}></i></a>
            <a href="https://wa.me/921048213" class="whatsapp_float" target="_blank" rel="noopener noreferrer"><i className='fab fa-whatsapp' style={{color:'antiquewhite', fontSize:'30px', marginLeft:'2%', }}></i></a>
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
export default Vender;