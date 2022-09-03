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
      <tr>
        <td><button onClick={handleEditClick}> Edit </button></td>
        <td><button onClick={handleDeleteClick}> Delete </button></td>
      </tr>
    ) : (
      null
    )}
    </tr>
  )
}

export default Review

// return (
//   <tr id="review-description">
//     <td>{description}</td>
//     <td><button onClick={handleEditClick}> Edit </button></td>
//     <td><button onClick={handleDeleteClick}> Delete </button></td>
//   </tr>
// )