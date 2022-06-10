import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dialog from './Dialog'


function Product ({img1, id, titulo, descrição, valor,}) {
  
    return(
        
        <div>

        <Card style={{ width: '18rem', position:'static' }} key={id} >
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
           {descrição}
          </Card.Text>
          {valor}
          <Dialog img1={img1} />
        </Card.Body>
      </Card>

   </div>

    )
    
}
export default Product;