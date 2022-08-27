import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

const GymReview = () => {
  const [gym, setGym] = useState({});
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/gyms/${id}`)
      .then((resp) => resp.json())
      .then((uniqueGym) => {
        setReviews(uniqueGym.reviews);
        setGym(uniqueGym);
      });
  }, [id]);

  function gymReviews() {
    if (reviews instanceof Array) {
      return reviews.map((review) => {
         <Review key={review.id} description={review.description} />;
      });
    } else {
      return null;
    }
  }

  return (
    <div>
      <img src={gym.image_url} />
      <h2>{gym.name}</h2>
      <p>{gym.address}</p>
      <h3>Reviews</h3>
      {gymReviews()}
    </div>
  );
};

export default GymReview;
