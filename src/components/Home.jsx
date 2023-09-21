import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import delivery from '../images/delivery.png'
import './Style.css'
const Home = () => {
  return (
    <Container className='mt-5'>
         <Row>
<Col className='lg-6'>
<h4>Easy way to make an order</h4>
<span className='bold-text'>HUNGRY?</span> <span className='home-text'>Just wait<br/> food at</span>
<span className='bold-text'> your door</span>
<p>Lorem ipsum dolor,  recusandae  obcaecati.
   Ratione debitis officia praesentium
    accusantium optio illo quidem, expedita reiciendis explicabo?</p>

    <div className='home-btn mt-4'>
    <button  className='btn-normal'  >  Order now <i class="ri-arrow-right-line"></i> </button>
    <button  className='btn-outline' >  See all foods </button>
       </div>

      <div className=' home-shipping-icons d-flex align-items-center gap-5 mt-5'> 
      
          <p className='d-flex align-items-center gap-2'>
            <span className='home-icons'><i class="ri-secure-payment-line"></i></span>
          No shipping charge
          </p>
          <p className='d-flex align-items-center gap-2'>
            <span className='home-icons'><i class="ri-secure-payment-line"></i></span>
          No shipping charge
          </p>
        
        
       
       
       
        

        </div>
       
       
      
</Col>
<Col className='lg-6'>
<img src={delivery}/>
</Col>
         </Row>
    </Container>
   
  )
}

export default Home