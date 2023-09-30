
import {React,useState,useEffect} from 'react'
import AllProducts from '../Fake-Data/FakeData'
import { Container,Row,Col } from 'reactstrap'
import burger from '../images/burger.png'
import './Style.css'
const FoodDetail = () => {

  const [tabs,setTabs]=useState("desc")
  const [enteredName,setEnteredName]=useState("")
  const [enteredEmail,setEnteredEmail]=useState("")
  const [enteredReview,setEnteredReview]=useState("")

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, enteredReview);
  };
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
      <div className="mx-5">
      <div className='product-title mb-4'>
        <h2>Double cheese pizza</h2>
      </div>
      <div className='product-price mb-4'>
        <p>price: <span>$110</span></p>
      </div>
      <div className='product-category mb-4'>
      <p>Category: <span>pizza</span></p>
      </div>
      <div className='add-btn'>
      <div className='addToCart'>
        
        <button >Add to Cart</button>
    </div>
      </div>
      </div>
   
    </Col>
  </Row>

  <Row>
    <div className='description d-flex gap-5 mt-5 mb-3'>

      <span onClick={()=> setTabs("desc")} className={`${tabs==="desc" ? "tab-active" : ""}`}>Description</span>
      <span onClick={()=> setTabs("rev")} className={`${tabs==="rev" ? "tab-active" : ""}`}>Review</span>

    </div>

{
  tabs==="desc" ?(
    <div className='desc-text'>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda doloribus, aliquam minima excepturi incidunt repellendus, laudantium ullam unde qui expedita accusamus. Nihil dolore, molestiae sed tempore asperiores sint ipsa modi.</p>
  </div>
  ):(
    <>
        <div className='review d-flex flex-column'>
    <div className='d-flex flex-column mb-4'>
    <span className='fw-bold'>John Dau</span>
    <span>gjk@jsk.dd</span>
    <span className='mt-3'>Lorem ipsum dolor sit amet.</span>
    </div>
    <div className='d-flex flex-column mb-4'>
    <span className='fw-bold'>John Dau</span>
    <span>gjk@jsk.dd</span>
    <span className='mt-3'>Lorem ipsum dolor sit amet.</span>
    </div>
    <div className='d-flex flex-column mb-4'>
    <span className='fw-bold'>John Dau</span>
    <span>gjk@jsk.dd</span>
    <span className='mt-3'>Lorem ipsum dolor sit amet.</span>
    </div>
  </div>

  <form className='form-submit mb-5 mt-3' onSubmit={submitHandler}>
    <input onChange={e =>setEnteredName(e.target.value)} type="text" placeholder='Enter your name' required className='w-100'/>
    <input onChange={e =>setEnteredEmail(e.target.value)} type="email" placeholder="Enter your email" required className='w-100' />
    <textarea onChange={e =>setEnteredReview(e.target.value)}  rows={5} type="text" placeholder='Write your review' required className='w-100' />
    <div className='addToCart'>
        
        <button  type='submit' >Submit</button>
    </div>
  </form>
    </>


  
  )
}
  


   
  </Row>
</Container>

  </>
  )
}

export default FoodDetail