import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Data from './Data';
import Itemcard from './Itemcard';
import DialogCompra from './DialogCompra';


const Compras1 = () =>{

    const[data, setData] = useState(Data)

const filterResult = (catItem) => {
 const result = Data.filter((curDate) => {
   return curDate.category === catItem;
 });
 setData(result);
}

//

    return (
        <div>

<div style={{textAlign:'center'}}>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => setData(Data)}>Tudo</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('acessorios')}>acessórios</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('informatica')}>Telemóveis e PC</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('pastas')}>Pastas</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('roupas')}>Roupas</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('veiculos')}>Veículos</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('casas')}>Casas</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('mobilias')}>Mobílias</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('outros')}>Outros</button>
    </div>

    <section className=''>
        <div className='py-4 container' >
        <div className="row justify-content-center">
    
    {data.map((item, index) => {
        const {img1, titulo, descrição, price} = item;   
        return (
            
            <Itemcard img1={img1} titulo={titulo} descrição={descrição} price={price} item={item} key={index} />
            
            );
        })}

    </div>
        </div>
        </section>

        </div>
    )
}

export default Compras1;