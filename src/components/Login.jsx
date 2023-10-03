
import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
   
    <>
           < div className='background-title'>

<h2>Login</h2>
</div>

<form className='form-submit mt-5 mb-5 w-25 d-flex  flex-column align-items-center'>
<input className='w-100'  type="text" placeholder='Email' />
<input className='w-100' type="text" placeholder='Password' />
<div className="addToCart ">
    <button type='submit' >Login</button>
</div>

</form>
<Link className='login-register d-flex justify-content-center mb-5' to="/register">
                Don't have an account? Create an account
              </Link>
    </>
  )
}

export default Login