import React from 'react';
import { Link } from "react-router-dom"
function Apoio() {
    return (
        <div className='App'>
             <div className='App-header'>
                <div className='logo'><p>BuyMore</p></div>
                    <div className='link-header'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/vender'}>Vender</Link></li>
                        <li><Link to={'/comprar'}>Comprar</Link></li>
                        <li><Link to={'/apoio'} className='active'>Apoio</Link></li>
                    </div>
            </div>
            <h2>Apoio ao cliente</h2>
        </div>
    );
}
export default Apoio;