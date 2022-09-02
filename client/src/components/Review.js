import React from 'react';
import { useHistory } from "react-router-dom";
import EditReview from './EditReview';

const Review = ({ description, review, handleDeleteReview }) => {

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
      <td><button onClick={handleEditClick}> Edit </button></td>
      <td><button onClick={handleDeleteClick}> Delete </button></td>
    </tr>
  )
}

export default Review