import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Dialog from './Dialog';
import Categories from './Categories'
import Itemcard from "./Itemcard";


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

        <div className="" style={{textAlign:'center'}}>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => setData(Categories)}>Tudo</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('programadores')}>Programadores</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('arquitetos')}>Arquitetos</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('designer')}>Designer Gráfico</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('contabilistas')}>Contabilistas</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('eletrecistas')}>Eletrecistas</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('mecanicos')}>Mecanicos</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('canalizadores')}>Canalizador e Frio</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('pintores')}>Pintor e Estucador</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('empreteiros')}>Empreteiro</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('pedreiros')}>Pedreiro</button>
       <button className="btn btn-warning w-10" style={{background:'#00FFFF', color:'#696969'}} onClick={() => filterResult('outros')}>Outros</button>
       </div>


       <section className=''>
        <div className='py-4 container' >
        <div className="row justify-content-center">

       {data.map((values)=> {
 const{img1, titulo, descrição, id} = values;

 return (

    <div className="col-11 col-md-3 col-lg-4 mx-0 mb-4" style={{position:'static'}}>
     <Card style={{ width: '18rem', position:'static' }} key={id} >
     <Card.Img variant="top" src={img1} style={{}}/>
     <Card.Body>
       <Card.Title>{titulo}</Card.Title>
       <Card.Text>
        {descrição}
       </Card.Text>
       <Dialog img1={img1} titulo={titulo} descrição={descrição}/>
     </Card.Body>
   </Card>
   </div>

 );
})}

        </div>
        </div>
        </section>

</div>

 )

}
export default Category;