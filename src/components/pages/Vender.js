import React from 'react';
import { Link } from "react-router-dom"

function Vender() {
    return (
        <div className='App'>
            <div className='App-header'>
                <div className='logo'><p>BuyMore</p></div>
                    <div className='link-header'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/vender'} className='active'>Vender</Link></li>
                        <li><Link to={'/comprar'}>Comprar</Link></li>
                        <li><Link to={'/apoio'}>Apoio</Link></li>
                    </div>
            </div>
            <h2>Aqui é o sitio certo para publicar e vender</h2>
            <p>gjfgdhasdjasdgg</p>
        </div>
    );
}
export default Vender;