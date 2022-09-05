import React, { useState } from 'react'
import Error from './Error';

const AddReview = ({ setReviewInput, handleAddingReview, gym_id, user_id }) => {
  const [errors, setErrors] = useState([]);
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
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((newReview) => handleAddingReview(newReview))
        setReview({ description: "" })
      } else {
        resp.json().then((err) => setErrors(err.errors))
      }
    })
  }

  function errorRender() {
    if (errors instanceof Array) {
      return errors.map((error) => 
      <Error key={error} error={error} />
      )
    } else {
      return null
    }
  }


  return (
    <div>
      {errorRender()}
     <textarea id="review-input" name="description" onChange={handleChange} value={review.description} placeholder="Type your review description..." />
     <button onClick={reviewAddClick}>Submit</button>
     <button onClick={closeReview}>Close</button>
    </div>
  )
}

export default AddReview