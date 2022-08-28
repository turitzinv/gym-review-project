import React from 'react'

const Home = ({ user }) => {
  return (
    <div>
      <h1>GymView</h1>
      <p>Hello {user.username} and welcome to Gymview, your view into all gyms!</p>
      <img 
      id="home-gym"
      src="https://user-images.githubusercontent.com/93049794/187080224-f3462b9e-3278-4841-a4fd-d9003d16ee2d.jpg"
      width = "1000"
      height = "700"
      />
    </div>
  )
}

export default Home