import React from 'react';
import { useHistory } from "react-router-dom";

const GymCard = ({ name, address, image, gym }) => {

  let history = useHistory()

  function onClick() {
    history.push(`/gymreview/${gym.id}`)
  }


  return (
    <div>
      <img src={image} alt={gym.name}/>
      <h2>{name}</h2>
      <p>{address}</p>
      <button onClick= {onClick}>Click for Reviews</button>
    </div>
  )
}

export default GymCard