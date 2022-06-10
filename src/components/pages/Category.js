import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Dialog from './Dialog';
import Categories from './Categories'

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
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('programadores')}>Programadores</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('arquitetos')}>Arquitetos</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('contabilistas')}>Contabilistas</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('eletrecistas')}>Eletrecistas</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('mecanicos')}>Mecanicos</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('canalizadores')}>Canalizador</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('pintores')}>Pintor e Estucador</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('empreteiros')}>Empreteiro</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('pedreiros')}>Pedreiro</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('outros')}>Outros</button>
       </div>


       {data.map((values)=> {
 const{img1, titulo, descrição, valor, id,} = values;
 return (

    <div className="" style={{position:'static'}}>
     <Card style={{ width: '18rem', position:'static' }} key={id} >
     <Card.Img variant="top" src={img1} />
     <Card.Body>
       <Card.Title>{titulo}</Card.Title>
       <Card.Text>
        {descrição}
       </Card.Text>
       {valor}
       <Dialog img1={img1} titulo={titulo} descrição={descrição}/>
     </Card.Body>
   </Card>
   </div>
 )
})}

</div>

 )

}
export default Category;