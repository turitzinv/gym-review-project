import React, { useState, useEffect} from 'react'
import GymCard from './GymCard'

const Gyms = () => {
  const [allGyms, setAllGyms] = useState([])

  useEffect(() => {
    fetch("/gyms")
    .then ((resp) => resp.json())
    .then((gyms) => setAllGyms(gyms))
  }, [])

  const fullGymList = allGyms.map((gym) => (
    <GymCard 
    key={gym.id}
    name={gym.name}
    address={gym.address}
    image={gym.image_url}
    gym={gym}
    />
  ))


  return (
    <div>
      {fullGymList}
    </div>
  )
}

export default Gyms