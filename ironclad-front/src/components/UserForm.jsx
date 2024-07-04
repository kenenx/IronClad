import React, { useState } from "react";

import { updateUser } from "../services/auth.service";

const UserForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    weight: "",
    experience_level: "",
  });
  const username = localStorage.getItem("user");



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormData = { ...formData, username };
      const data = await updateUser(updatedFormData);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="container d-flex align-items-center justify-content-center mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Weight (in kg):</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Level:</label>
              <select
                name="level"
                value={formData.experience_level}
                onChange={handleChange}
                className="form-select"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
