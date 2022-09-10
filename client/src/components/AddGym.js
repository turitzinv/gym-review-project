import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Error from "./Error";

const AddGym = () => {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    image_url: ""
  });

  let history = useHistory()

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleGymSubmit(event) {
    event.preventDefault();
    fetch("/gyms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        address: formData.address,
        image_url: formData.image_url
      }),
    }).then((resp => {
      if (resp.ok) {
        //resp.json().then((newGym) => console.log(newGym))
        setFormData({
          name: "",
          address: "",
          image_url: ""
        })
        history.push("/gyms")
      } else {
        resp.json().then((err) => setErrors(err.errors))
      }
    }))
  }

  function errorRender() {
    if (errors instanceof Array) {
      return errors.map((error) => 
      <Error key={error} error={error} />
      )
    } else {
      return null
    }
  }

  return (
    <div>
      <h1 id="add-gym-header">Add a new Gym</h1>
      <form id="gym-form" onSubmit={handleGymSubmit}>
        <div>
          <input
            className="gym-input"
            text="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="gym-input"
            text="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="gym-input"
            text="text"
            name="image_url"
            placeholder="Image Link"
            value={formData.image_url}
            onChange={handleChange}
          />
        </div>
        <button id="add-gym-button" type="submit">
          Add Gym
        </button>
        {errorRender()}
      </form>
    </div>
  );
};

export default AddGym;
