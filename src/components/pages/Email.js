import React from "react";
import emailjs from 'emailjs-com'

const Myapp=()=>{
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

    // Valores Vendas config

    return (

        <div className='container border' id="email-config" style={{width:'40%', background:'#696969'}}>
        <h1 style={{color:'antiquewhite', textAlign:'center'}}>Contact form</h1>
        <form className='row' style={{ margin:'25px'}} onSubmit={sendemail}>
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
);
}
export default Myapp;
