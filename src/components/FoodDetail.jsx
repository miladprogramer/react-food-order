
import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AllProducts from '../Fake-Data/FakeData'
import { Container,Row,Col } from 'reactstrap'
import burger from '../images/burger.png'
import './Style.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/CartSlice'
import Reviews from './Reviews'
const FoodDetail = () => {
  const dispatch=useDispatch()
  
  const addToCart=()=>{

    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price,
    }))
  }
const {id} =useParams()
const product=AllProducts.find((item)=>item.id===id)
const {title,image01,price,category,desc} =product
  const [tabs,setTabs]=useState("desc")
  const [previewImg,setPreviewImg]=useState(image01)
  const [enteredName,setEnteredName]=useState("")
  const [enteredEmail,setEnteredEmail]=useState("")
  const [enteredReview,setEnteredReview]=useState("")
  const [reviews,setReviews]=useState([])
  const [submited,setSubmited]=useState()

  const addToReviews=()=>{

    const item={
      name:enteredName,
      email:enteredEmail,
      reviewText:enteredReview
    }

    setReviews((prevReviews) => {
      return [...prevReviews, item];
    });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmited(true)
  
  };
  return (
  <>
  < div className='background-title'>

<h2>{title}</h2>
</div>

<Container>
  <Row className='mt-5 mb-4'>
    <Col lg="2">

      <div className='sub-img d-flex flex-column gap-3'>
<img onClick={()=>setPreviewImg(product.image01)} className='w-50 p-2' src={product.image01}/>
<img onClick={()=>setPreviewImg(product.image02)} className='w-50 p-2' src={product.image02}/>
<img onClick={()=>setPreviewImg(product.image03)} className='w-50 p-2' src={product.image03}/>
      </div>
    </Col>
    <Col lg="4">
      <div className="main-img">
      <img className='w-100' src={previewImg}/>
      </div>
    </Col>
    <Col lg="6">
      <div className="mx-5">
      <div className='product-title mb-4'>
        <h2>{title}</h2>
      </div>
      <div className='product-price mb-4'>
        <p>price: <span>${price}</span></p>
      </div>
      <div className='product-category mb-4'>
      <p>Category: <span>{category}</span></p>
      </div>
      <div className='add-btn'>
      <div className='addToCart'>
        
        <button onClick={addToCart} >Add to Cart</button>
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
    {
      
reviews.map((item)=>(
  <div className='review d-flex flex-column'>
    <div className='d-flex flex-column mb-4'>
    <span className='fw-bold'>{item.name}</span>
    <span>{item.email}</span>
    <span className='mt-3'>{item.reviewText}</span>
    </div>
    </div>
))
    }
  

  <form className='form-submit mb-5 mt-3' onSubmit={submitHandler}>
    <input onChange={e =>setEnteredName(e.target.value)} value={enteredName}
    type="text" placeholder='Enter your name' required className='w-100'/>
    <input onChange={e =>setEnteredEmail(e.target.value)} value={enteredEmail}
    type="email" placeholder="Enter your email" required className='w-100' />
    <textarea onChange={e =>setEnteredReview(e.target.value)} value={enteredReview}
     rows={5} type="text" placeholder='Write your review' required className='w-100' />
    <div className='addToCart'>
        <button onClick={addToReviews} type='submit' >Submit</button>
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