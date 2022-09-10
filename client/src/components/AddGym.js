import React, { useState } from "react";

const AddGym = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    image_url: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <h1 id="add-gym-header">Add a new Gym</h1>
      <form id="gym-form">
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
            placeholder="Image"
            value={formData.image_url}
            onChange={handleChange}
          />
        </div>
        <button id="add-gym-button" type="submit">
          Add Gym
        </button>
      </form>
    </div>
  );
};

export default AddGym;
