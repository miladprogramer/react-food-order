
import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    const submitHandler = (e) => {
        e.preventDefault();
      };
  return (
   
    <>
           < div className='background-title'>

<h2>Sign Up</h2>
</div>

<form className='form-submit mt-5 mb-5 w-25 d-flex  flex-column align-items-center'>
<input className='w-100'  type="text" placeholder='Email' />
<input className='w-100' type="text" placeholder='Password' />
<input className='w-100' type="text" placeholder='Password' />
<div className="addToCart ">
    <button type='submit' onClick={submitHandler}> Sign Up</button>
</div>

</form>
<Link className='login-register d-flex justify-content-center mb-5' to="/login">
Already have an account? Login
              </Link>
    </>
  )
}

export default Register