
import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import fastfood from '../images/fastfood.png'
import pizza from '../images/pizza.png'
import asian from '../images/asian.png'
import meat from '../images/meat.png'
import './Style.css'
const Category = () => {

    const categoryData=[
         {
            title:"Fastfood",
            imgUrl:fastfood
        },
        {
            title:"Pizza",
            imgUrl:pizza
        },
        {
            title:"Asian foods",
            imgUrl:asian
        },
        {
            title:"Row meat",
            imgUrl:meat
        },
        
    ]
       

    
  return (
    <Container>
        <Row>

{
    categoryData.map((item,index)=>(
        <Col lg="3">
<div key={index} className="category-item d-flex align-items-center gap-3 mb-3">
    <div className="category-img">
        <img src={item.imgUrl}/>
    </div>
    <h6>{item.title}</h6>
</div>
        </Col>
    ))
}
           
        </Row>
    </Container>
  )
}

export default Category