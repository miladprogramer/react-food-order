
import React from 'react'

const Reviews = ({enteredEmail,enteredName,enteredReview}) => {
  return (
    <div className='review d-flex flex-column'>
    <div className='d-flex flex-column mb-4'>
    <span className='fw-bold'>{enteredName}</span>
    <span>{enteredEmail}</span>
    <span className='mt-3'>{enteredReview}</span>
    </div>
 
  
  </div>
  )
}

export default Reviews