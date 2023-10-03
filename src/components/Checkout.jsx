
import {React,useState} from 'react'
import { Container,Row,Col } from 'reactstrap'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
const Checkout = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost=10
    const cartTotalAmount = totalAmount + Number(shippingCost);
    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterNumber, setEnterNumber] = useState("");
    const [enterCountry, setEnterCountry] = useState("");
    const [enterCity, setEnterCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const shippingInfo = [];

    const submitHandler=(e)=>{
        e.preventDefault()

        const userShippingAddress={
            name:enterName,
            email:enterEmail,
            phone: enterNumber,
            country: enterCountry,
            city: enterCity,
            postalCode: postalCode,
        }
        shippingInfo.push(userShippingAddress)
        console.log(shippingInfo);

        
    }
  return (
   <>
       < div className='background-title'>

<h2>Checkout</h2>
</div>

<Container>
    <Row className='mt-5'>
        <Col lg="8">
        <h6 className='shipping-address-title'>Shipping Address</h6>
        <div className='form-address mt-4'>
            <form className='checkout-form' onSubmit={submitHandler}>
<div>
    <input type="text"  placeholder="Enter your name" required  onChange={(e) => setEnterName(e.target.value)}/>
</div>
<div>
    <input type="text"  placeholder="Enter your email" required onChange={(e) => setEnterEmail(e.target.value)}/>
</div>
<div>
    <input type="text"  placeholder="phone number" required onChange={(e) => setEnterNumber(e.target.value)}/>
</div>
<div>
    <input type="text" placeholder="Country" required onChange={(e) => setEnterCountry(e.target.value)} />
</div>
<div>
    <input type="text"  placeholder="City" required onChange={(e) => setEnterCity(e.target.value)}/>
</div>
<div>
    <input type="text"  placeholder="Postal code" required onChange={(e) => setPostalCode(e.target.value)}/>
</div>
<div className="addToCart">
    <button type='submit' >Payment</button>
</div>

            </form>


        </div>
        </Col>
         <Col lg="4">

         <div className="checkout-bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout-total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${cartTotalAmount}</span>
                  </h5>
                </div>
              </div>
        </Col>
    </Row>
</Container>

   </>
  )
}

export default Checkout