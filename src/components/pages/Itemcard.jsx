import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import DialogCompra from './DialogCompra';
import { useCart } from 'react-use-cart';

const Itemcard = ({img1, titulo, id, descrição, price, item}) => {

  const { addItem } = useCart();


    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{position:'static'}}>
         <Card style={{ width: '14rem', position:'static'}} key={id}>
         <Card.Img variant="top" src={img1} />
         <Card.Body>
           <Card.Title style={{textAlign:'center'}}>{titulo}</Card.Title>
           <Card.Text>
           </Card.Text>
           {price}
           <DialogCompra img1={img1} titulo={titulo} descrição={descrição} price={price} />
           <button className="btn btn-dark" style={{float:'right', backgroundColor:'#696969', color:'antiqueWhite', fontSize:'10px'}} onClick={() => addItem(item)}>Add to card</button>
         </Card.Body>
       </Card>
       </div>
     );
}
 export default Itemcard;