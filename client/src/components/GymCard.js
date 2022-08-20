import React from 'react'

const GymCard = ({ name, address,image, gym, review }) => {

  // function onClick() {
  //   fetch(`/gyms/${gym.id}`, {
  //     method: ""
  //   })
  // }


  return (
    <div>
      <img src={image} />
      <h2>{name}</h2>
      <p>{address}</p>
      <button>Click for Reviews</button>
    </div>
  )
}

export default GymCard