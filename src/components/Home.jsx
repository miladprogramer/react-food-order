import { React, useState, useEffect } from 'react'
import { Container, Row, Col,ListGroup,ListGroupItem } from 'reactstrap'
import delivery from '../images/delivery.png'
import pickup from '../images/pickup.png'
import fastDelivery from '../images/fast delivery.png'
import dine from '../images/dine.png'
import pizza2 from '../images/pizza2.png'
import burger from '../images/burger.png'
import bread from '../images/bread.png'
import location from '../images/location.png'
import './Style.css'
import Category from './Category'
import Foods from './Foods'
import AllProducts from '../Fake-Data/FakeData'
const Home = () => {

  const [category, setCategory] = useState("All")
  const [products, setProducts] = useState(AllProducts)

  useEffect(()=>{

  if(category==="All"){
setProducts(AllProducts)
  }
  if(category==="Burger"){
    const productsFiltered=AllProducts.filter(item=> item.category==="Burger")
    setProducts(productsFiltered)
  }
 
  if(category==="Pizza"){
    const productsFiltered=AllProducts.filter(item=>item.category==="Pizza")
    setProducts(productsFiltered)
  }
  
  if(category==="Bread"){
    const productsFiltered=AllProducts.filter(item=>item.category==="Bread")
    setProducts(productsFiltered)
  }
  
  },[category])

  return (
    <Container className='mt-5'>
      <Row>
        <Col className='lg-6 mt-5'>
          <h4>Easy way to make an order</h4>
          <span className='bold-text'>HUNGRY?</span> <span className='home-text'>Just wait<br /> food at</span>
          <span className='bold-text'> your door</span>
          <p>Lorem ipsum dolor,  recusandae  obcaecati.
            Ratione debitis officia praesentium
            accusantium optio illo quidem, expedita reiciendis explicabo?</p>

          <div className='home-btn mt-4'>
            <button className='btn-normal'  >  Order now <i class="ri-arrow-right-line"></i> </button>
            <button className='btn-outline' >  See all foods </button>
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
          <img src={delivery} />
        </Col>
      </Row>

      <Row className='mt-5'>
        <Category />
      </Row>

      <Row className='mt-5 text-center mb-5'>
        <h5 className='feature-title'>What we serve</h5>
        <h2 className='feature-subtitle'>Just seat back at home</h2>
        <h2 className='feature-subtitle'>we will
          <span className='feature-bold'> take care</span></h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora?</p>

      </Row>

      <Row>
        <div className="feature-item d-flex gap-3 text-center mt-5 mb-5">
          <div className='feature-content '>
            <img src={fastDelivery} />
            <h5>Fast Delivery</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, animi.</p>
          </div>
          <div className='feature-content'>
            <img src={dine} />
            <h5>Super Dine In</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, animi.</p>
          </div>
          <div className='feature-content'>
            <img src={pickup} />
            <h5>Easy Pick Up</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, animi.</p>
          </div>

        </div>
      </Row>

      <Row>
        <div className='foods-title text-center mt-5 mb-4'>
          <h4>Popular Foods</h4>
        </div>
        <div className='foods-category   d-flex align-items-center justify-content-center gap-5 p-3 mb-5'>
          <button className={`${category==="All" ? "active-btn" : ""}`} onClick={()=>setCategory("All")}>All</button>
          <button className={`d-flex align-items-center gap-2 ${category==="Burger" ? "active-btn" : ""}`} onClick={()=>setCategory("Burger")} > <img src={burger} /> Burger</button>
          <button className={`d-flex align-items-center gap-2 ${category==="Pizza" ? "active-btn" : ""}`} onClick={()=>setCategory("Pizza")} ><img src={pizza2} />Pizza</button>
          <button className={`d-flex align-items-center gap-2 ${category==="Bread" ? "active-btn" : ""}`} onClick={()=>setCategory("Bread")} ><img src={bread} />Bread</button>
        </div>
      </Row>

      <Row>
        {
          products.map((item) => (

            <Col lg="3" md="4">
              <Foods item={item} />
            </Col>
          ))
        }


      </Row>
    
    
      <Row>
        <Col lg="6">
          <img className='w-100 mt-5' src={location}/>
        </Col>
        <Col lg="6">
          <div className='why-tasty-foods'>

            <h2 className='why-title'>Why <span className='why-bold'>TASTY FOODS?</span></h2>
            <p className="why-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose-us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose-us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose-us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose-us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose-us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose-us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
          </div>
        </Col>
      </Row>
    
    </Container>

  )
}

export default Home