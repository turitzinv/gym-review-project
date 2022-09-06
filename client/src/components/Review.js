import React from 'react';
import { useHistory } from "react-router-dom";

const Review = ({ description, review, handleDeleteReview, currentUser }) => {

  let history = useHistory()

  function handleDeleteClick() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE"
    })
      .then(resp => {
        if(resp.ok){
          handleDeleteReview(review)
        }
      })
  }

  function handleEditClick() {
    history.push(`/reviews/${review.id}`)
  }


  return (
    <tr id="review-description">
      <td>{description}</td>
      { review.user_id === currentUser ? (
      <>
        <td><button class="review-buttons" onClick={handleEditClick}> Edit </button></td>
        <td><button class="review-buttons" onClick={handleDeleteClick}> Delete </button></td>
      </>
    ) : (
      null
    )}
    </tr>
  )
}

export default Review