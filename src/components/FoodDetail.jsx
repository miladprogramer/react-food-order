
import React from 'react'
import AllProducts from '../Fake-Data/FakeData'
import { Container,Row,Col } from 'reactstrap'
import burger from '../images/burger.png'
import './Style.css'
const FoodDetail = () => {
  return (
  <>
  < div className='background-title'>

<h2>All Foods</h2>
</div>

<Container>
  <Row className='mt-5 mb-4'>
    <Col lg="2">

      <div className='sub-img d-flex flex-column gap-3'>
<img className='w-50 p-2' src={burger}/>
<img className='w-50 p-2' src={burger}/>
<img className='w-50 p-2' src={burger}/>
      </div>
    </Col>
    <Col lg="4">
      <div className="main-img">
      <img className='w-100' src={burger}/>
      </div>
    </Col>
    <Col lg="6">
      <div className='product-title'>
        <h2>Double cheese pizza</h2>
      </div>
      <div className='product-price'>
        <p>price: <span>$110</span></p>
      </div>
      <div className='product-category'>
      <p>Category: <span>pizza</span></p>
      </div>
      <div className='add-btn'>
      <div className='addToCart'>
        
        <button >Add to Cart</button>
    </div>
      </div>
    </Col>
  </Row>
</Container>

  </>
  )
}

export default FoodDetail