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


  //PATCH will occur here to update review

  function handleUpdatingReview() {
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: newReview.description
      }),
    })
    .then((resp) => resp.json())
    .then((updatedReview) => console.log(updatedReview)) //do I need to update states here? Might not need to
  }




  function handleReviewChange(e) {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <textarea id="review-input" name="description" defaultValue={review.description} onChange={handleReviewChange}></textarea>
      <button onClick={handleUpdatingReview}>Finalize Edit</button>
      <button>Cancel Edit</button>
    </div>
  )
}

export default EditReview