import React, { useState } from 'react'

const AddReview = ({ setReviewInput, handleAddingReview, gym_id, user_id }) => {
  const [review, setReview] = useState({
    description: ""
  })

  function closeReview() {
    setReviewInput([])
  }

  function handleChange(e) {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    })
  }


  function reviewAddClick() { 
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: review.description,
        gym_id: gym_id,
        user_id: user_id
      }),
    })
    .then((resp) => resp.json())
    .then((newReview) => handleAddingReview(newReview))
    setReview({ description: ""})
  }


  return (
    <div>
     <textarea id="review-input" name="description" onChange={handleChange} value={review.description} placeholder="Type your review..." />
     <button onClick={reviewAddClick}>Submit</button>
     <button onClick={closeReview}>Close</button>
    </div>
  )
}

export default AddReview