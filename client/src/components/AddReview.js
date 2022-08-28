import React from 'react'

const AddReview = ({ setReviewInput }) => {

  function closeReview() {
    setReviewInput([])
  }

  return (
    <div>
     <textarea id="review-input" placeholder="Type your review..." />
     <button>Submit</button>
     <button onClick={closeReview}>Close</button>
    </div>
  )
}

export default AddReview