import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import AddReview from "./AddReview";

const GymReview = ({ user_id }) => {
  const [gym, setGym] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/gyms/${id}`)
      .then((resp) => resp.json())
      .then((uniqueGym) => {
        setReviews(uniqueGym.reviews);
        setGym(uniqueGym);
      });
  }, [id]);

  function handleAddingReview(newReview) {
    setReviews([...reviews, newReview])
  }

  function addReviewClick() {
    setReviewInput(
    <AddReview 
      setReviewInput={setReviewInput} 
      handleAddingReview={handleAddingReview}
      gym_id={gym.id}
      specificGym={gym}
      user_id={user_id}
      />)
  }

  function handleDeleteReview(deletedReview) {
    const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id);
    setReviews(updatedReviews)
  }



  function gymReviews() {
    if (reviews instanceof Array) {
      return reviews.map((review) => 
         <Review key={review.id} description={review.description} review={review} handleDeleteReview={handleDeleteReview} currentUser={user_id} />
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <img src={gym.image_url} alt={gym.name} />
      <h2>{gym.name}</h2>
      <p>{gym.address}</p>
      <button onClick={addReviewClick}>Add a review</button>
      {reviewInput}
      <h3>Reviews</h3>
      <table id="review-table">
      <tbody>{gymReviews()}</tbody>
      </table>
    </div>
  );
};

export default GymReview;
