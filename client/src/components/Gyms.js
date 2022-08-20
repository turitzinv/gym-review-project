import React from 'react'
import GymCard from './GymCard'

const Gyms = ({ allGyms }) => {
  const fullGymList = allGyms.map((gym) => (
    <GymCard 
    key={gym.id}
    name={gym.name}
    address={gym.address}
    image={gym.image_url}
    gym={gym}
    review={gym.reviews} //unsure if review will be used, maybe save for show
    />
  ))


  return (
    <div>
      {fullGymList}
    </div>
  )
}

export default Gyms