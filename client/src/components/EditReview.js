import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const EditReview = () => {
  const [review, setReview] = useState({
    description: ""
  })
  const [newReview, setNewReview] = useState({
    description: ""
  })
  const { id } = useParams()

  useEffect(() => {
   fetch(`/reviews/${id}`)
   .then((resp => resp.json()))
   .then((review) => setReview(review))
  }, [])

  console.log(newReview)
  //PATCH will occur here to update review


  function handleReviewChange(e) {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <textarea id="review-input" name="description" text={review.description} onChange={handleReviewChange}></textarea>
      <button>Finalize Edit</button>
      <button>Cancel Edit</button>
    </div>
  )
}

export default EditReview