
import {React,useState} from 'react'

import { Container,Col,Row } from 'reactstrap'
import './Style.css'

import AllProducts from '../Fake-Data/FakeData'
import Foods from './Foods'
const AllFoods = () => {

  const [searchItem,setSearchItem]=useState('')
  
  const searchedProduct = AllProducts.filter((item) => {
    if (searchItem === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchItem.toLowerCase())) {
      return item;
    }
  });

  return (
  <>
 
   < div className='background-title'>
  
<h2>All Foods</h2>
    </div>
  
  <Container>
    <Row>
      <Col lg="3">
      <div className='search-box d-flex justify-content-between mt-5 mb-5'>
      <input value={searchItem} onChange={e=> setSearchItem((e).target.value)}
       type='text' placeholder='Search'/>
      <i class="ri-search-line"></i>
    </div>
      </Col>
    </Row>

    <Row>
    {
        searchedProduct.map((item)=>(
          <Col lg="3">
    <Foods item={item}/>
    
      </Col>
        ))
      }
      
    </Row>
    
  </Container>
  
  </>
  )
}

export default AllFoods