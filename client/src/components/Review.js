import React from 'react'

const Review = ({ description, review, handleDeleteReview }) => {

  function handleDeleteClick() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE"
    })
      .then(resp => {
        if(resp.ok){
          handleDeleteReview(review)
        }
      })
    // .then((resp) => resp.json())
    // .then(() => handleDeleteReview(review))
  }

  return (
    <tr id="review-description">
      <td>{description}</td>
      <td><button> Edit </button></td>
      <td><button onClick={handleDeleteClick}> Delete </button></td>
    </tr>
  )
}

export default Review