import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';
import emailjs from 'emailjs-com'


const Cart = () => {

  // Cart config

  const { 
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if(isEmpty) return <h1 className='text-center'>Não foi adicionado nada ao carrinho</h1>

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
  
    return (
      <div>
                <h2>Thegreat</h2>
            <section className='py-4 container'>
              <div className='row justify-content-center'>
                <div className='col-12'>
                  <h5> Cart ({totalUniqueItems}) Total Item: ({totalItems})</h5>
                    <table className=''>
                      <tbody>
                        {items.map((item, index) =>{
                          return(
                            <tr key={index}>
                              <td>
                                <img src={item.img1} style={{height:'300px', width:'250px'}}/>
                              </td>
                              <td>{item.titulo}</td>
                              <td>{item.price}</td>
                              <td>Quantity: ({item.quantity})</td>
                              <button className="btn btn-dark" style={{float:'right', backgroundColor:'#696969', color:'black', fontSize:'10px'}}
                              onClick={() => updateItemQuantity(item.id, item.quantity -1 )}>-</button>

                              <button className="btn btn-info ms-2" style={{float:'right', backgroundColor:'#696969', color:'black', fontSize:'10px'}} 
                              onClick={() => updateItemQuantity(item.id, item.quantity +1 )}>+</button>
                              <button className="btn btn-danger" style={{float:'right', backgroundColor:'red', color:'black', fontSize:'10px'}}
                              onClick={() => removeItem(item.id)}>Remover artigo</button>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                  <h2>Total: {cartTotal}</h2>
                </div>
                <div className='col-auto'>
                  <button className='btn btn-dark' style={{float:'right', backgroundColor:'#696969', color:'antiquewhite', fontSize:'10px'}}
                  onClick={() => emptyCart()}>Limpar carrinho</button>
                </div>
              </div>

              <div className='container border' id="email-config" style={{width:'70%', background:'#696969', display:''}}>
                <h1 style={{color:'antiquewhite', textAlign:'center'}}>Contact form</h1>
                <form className='row' style={{margin:' 25px '}} onSubmit={sendemail}>
                <label style={{color:'antiquewhite'}}>Nome</label>
                <input type="text" name="name" className='form-control'/>
                <label style={{color:'antiquewhite'}}>Telemóvel</label>
                <input type="number" name="phone" className='form-control'/>
                <label style={{color:'antiquewhite'}}>Email</label>
                <input type="email" name="user_email" className='form-control'/>
                <input type="null" name={cartTotal} className='form-control'/>
                <label style={{color:'antiquewhite'}}>{cartTotal}</label>
                <input type="message" name='message' row="3" className='form-control'/>
                <button type='submit' className='form-control btn btn-primary' style={{background:"#00FFFF", color:'#23232e', marginTop:'30px'}}>Enviar</button>
                </form>
            </div>
            </section>
      </div>


    );
}
export default Cart;