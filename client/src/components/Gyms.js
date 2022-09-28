import React, { useState, useEffect} from 'react'
import GymCard from './GymCard'

const Gyms = () => {
  const [allGyms, setAllGyms] = useState([])
  const [sortedGyms, setSortedGyms] = useState([])

  useEffect(() => {
    fetch("/gyms")
    .then ((resp) => resp.json())
    .then((gyms) => setAllGyms(gyms))
  }, [])

  useEffect(() => {
    fetch("/gyms/sort")
    .then((resp) => resp.json())
    .then((newGyms) => setSortedGyms(newGyms))
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

  function sortGymClick() {
    console.log(sortedGyms)
  }


  return (
    <div>
      <button onClick={sortGymClick}>Sort Gyms</button>
      {fullGymList}
    </div>
  )
}

export default Gyms