import React, { useState } from 'react'

const AddReview = ({ setReviewInput, handleAddingReview, gym_id, gym }) => {
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

  //console.log(gym_id)
  //console.log(gym)


  function reviewAddClick() {
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: review.description,
        gym: {
          id: gym_id,
          name: gym.name,
          address: gym.address,
          image_url: gym.image_url
        }
      }),
    })
    .then((resp) => resp.json())
    .then((newReview) =>console.log(newReview))
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