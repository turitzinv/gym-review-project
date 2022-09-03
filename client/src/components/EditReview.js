import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";

const EditReview = () => {
  const [review, setReview] = useState({
    description: ""
  })
  const [newReview, setNewReview] = useState({
    description: ""
  })
  const { id } = useParams()

  let history = useHistory()

  useEffect(() => {
   fetch(`/reviews/${id}`)
   .then((resp => resp.json()))
   .then((review) => setReview(review))
  }, [id])


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
    //.then((updatedReview) => console.log(updatedReview)) //do I need to update states here? Might not need to
    history.push(`/gymreview/${review.gym_id}`)
  }

  function cancelEditClick() {
    history.push(`/gymreview/${review.gym_id}`)
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
      <button onClick={cancelEditClick}>Cancel Edit</button>
    </div>
  )
}

export default EditReview