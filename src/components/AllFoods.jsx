
import React from 'react'

import { Container,Col,Row } from 'reactstrap'
import './Style.css'

import AllProducts from '../Fake-Data/FakeData'

const AllFoods = () => {
  return (
  <>
 
   < div className='background-title'>
  
<h2>All Foods</h2>
    </div>
  
  <Container>
    <Row>
      <Col lg="3">
      <div className='search-box d-flex justify-content-between mt-5 mb-5'>
      <input type='text' placeholder='Search'/>
      <i class="ri-search-line"></i>
    </div>
      </Col>
    </Row>
    
  </Container>
  
  </>
  )
}

export default AllFoods