import React from 'react'
import { Container,Row,Col,ListGroup } from 'reactstrap'
import logo from '../images/tasty food (2).png'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <Row>
            <Col className='lg-3 md-6 footer-logo'>
            <img src={logo}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit  distinctio eius aliquid!</p>
            </Col>
            <Col className='lg-3 md-6'>
            <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Friday - Tuesday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Wednesday - Thursday</span>
            <p>Off day</p>
          </div>
        </ListGroup>
            </Col>
            <Col className='lg-3 md-6'>
            <h5 className="footer__title mb-3">Contact</h5>
       
          <div className="delivery__time-item border-0 ps-0">
            <p>Friday - Tuesday Friday - Tuesday Friday - Tuesday</p>
            
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <h5>Wednesday - Thursday</h5>
            <h5>Off day</h5>
          </div>
        
            </Col>
            <Col className='lg-3 md-6'>
            <h5 className="footer__title mb-3">Newsletter</h5>
       
       <div className="delivery__time-item border-0 ps-0">
         <p>Subscribe our newsletter</p>
         
       </div>
       <div className='footer-input'>
        <input type='email' placeholder='Enter your email'/>
        <i class="ri-send-plane-fill"></i>
       </div>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Footer