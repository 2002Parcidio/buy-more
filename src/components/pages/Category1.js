import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Categories from './Categories1';
import Cards from './Cards'

const Category = () => {

const[data, setData] = useState(Categories)

const filterResult = (catItem) => {
 const result = Categories.filter((curDate) => {
   return curDate.category === catItem;
 });
 setData(result);
}


 return(
     <div>

        <div className="">
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => setData(Categories)}>Tudo</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('acessorios')}>acessórios</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('informática')}>Telemóveis e PC</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('roupas')}>Roupas</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('carros')}>Carros</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('casas')}>Casas</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('mobilias')}>Mobílias</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('outros')}>Outros</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('unknown')}>unknown</button>
       </div>


       {data.map((values)=> {
 const{img, title, valor, id, date, nome, letra, description, autor, numero} = values;
 return (
      <div className="">
            <Cards img={img} title={title} description={description} date={date} nome={nome} letra={letra} autor={autor} numero={numero} valor={valor} id={id} className="flex"/>
      </div>
 )
})}

</div>

 )

}
export default Category;