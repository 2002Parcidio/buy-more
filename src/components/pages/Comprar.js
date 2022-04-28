import React from 'react';
import { Link } from "react-router-dom"

function Comprar() {
    return (
        <div className='App'>
             <div className='App-header'>
                <div className='logo'><p>BuyMore</p></div>
                    <div className='link-header'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/vender'}>Vender</Link></li>
                        <li><Link to={'/comprar'} className='active'>Comprar</Link></li>
                        <li><Link to={'/apoio'}>Apoio</Link></li>
                    </div>
            </div>
            <h2>Faça aqui as suas compras</h2>
        </div>
    );
}
export default Comprar;