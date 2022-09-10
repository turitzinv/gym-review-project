import React, { useState, useEffect } from 'react'

const MyGymsReviewed = ({ user }) => {
  const [myGyms, setMyGyms] = useState([]);

useEffect(() => {
  fetch("/me")
  .then((resp) => resp.json())
  .then((myReviewedGyms) => setMyGyms(myReviewedGyms.gyms))
}, [])

function gymsRender() {
  if (myGyms instanceof Array) {
    return myGyms.map((gym) => <p key={gym.name}>{gym.name}</p>)
  } else {
    return null
  }
}

  return (
    <div>
      <h1 id="my-reviewed-gyms"> My Reviewed Gyms</h1>
      {gymsRender()}
    </div>
  )
}

export default MyGymsReviewed