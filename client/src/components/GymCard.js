import React from 'react';
import { useHistory } from "react-router-dom";

const GymCard = ({ name, address, image, gym }) => {

  let history = useHistory()

  function onClick() {
    history.push(`/gymreview/${gym.id}`)
  }


  return (
    <div id="gym-card">
      <img id="gym-image" src={image} alt={gym.name}/>
      <h2>{name}</h2>
      <p>{address}</p>
      <button id="click-for-reviews" onClick= {onClick}>Click for Reviews</button>
    </div>
  )
}

export default GymCard