import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const GymReview = ({ allGyms }) => {
  const [gym, setGym] = useState({})
  const [reviews, setReviews] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetch(`/gyms/${id}`)
    .then((resp) => resp.json())
    .then((uniqueGym) => setGym(uniqueGym))
  }, [id])

  console.log(reviews)

  // console.log(gym.reviews)
  // let allReviews = gym.reviews
  // console.log(allReviews)
  // let displayReviews = []

  // allReviews.map(x =>  {
  //   displayReviews.push(x.description)
  //   setReviews(displayReviews)
  // })

  // console.log(displayReviews)

  // let reviews = gym.map((gym) => {
  //   return gym.reviews
  // })



  // gym.reviews.forEach(review => {
  //   for( let key in review) {
  //     console.log(`${key}: ${review[key]}`)
  //   }
  // })

  // reviews.forEach(review => {
  //   displayReviews.push()
  // })

  // function description(reviews) {
  //   for (let i=0, i++, i <= reviews.length) {
  //     displayReviews.push(reviews[i].description)
  //   }
  //   console.log(displayReviews)
  // }

 

  return (
    <div>
      <img src={gym.image_url} />
      <h2>{gym.name}</h2>
      <p>{gym.address}</p>
      <h3>Reviews</h3>
      <p></p>
    </div>
  )
}

export default GymReview

//{description(reviews)}