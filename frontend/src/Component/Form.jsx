import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

import Home from "./Home";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    numberofTravellers: null,
    budgetPerPerson: null,
    total: 0,
  });
  const [formStatus, setFromStatus] = useState("idle");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.total = calculateNetBudget();
    setFromStatus("...loading");
    // Send form data to backend API endpoint
    fetch("https://travelopia-29rz.onrender.com/traveller/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          // Handle success response
          console.log("Form submitted successfully");
          setFromStatus("succefully");
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        } else {
          // Handle error response
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => {
        // Handle error
        console.log(error);
        setFromStatus("idle");
      });
  };

  const calculateNetBudget = () => {
    const { numberofTravellers, budgetPerPerson } = formData;
    return numberofTravellers * budgetPerPerson;
  };

  if (formStatus === "loading") {
    return (
      <h1 style={{ color: "white", textAlign: "center", fontSize: "40px" }}>
        Loading
      </h1>
    );
  }
  if (formStatus === "succefully") {
    return (
      <h1 style={{ color: "white", textAlign: "center", fontSize: "40px" }}>
        successfully
      </h1>
    );
  }

  return (
    <div>
      <Home />
      <h1 style={{ color: "black", textAlign: "center", fontSize: "40px" }}>
        Submission Form
      </h1>
      <p style={{ color: "black", textAlign: "center" }}>
        Contact us to plan your next journey
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name*"
          required
          value={formData.name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={handleInputChange}
        />

        <select
          id="destination"
          name="destination"
          placeholder="Destination*"
          required
          value={formData.destination}
          onChange={handleInputChange}
        >
          <option value="">Select a destination</option>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
        </select>

        <input
          type="number"
          id="travelers"
          name="numberofTravellers"
          required
          placeholder="Number of Travelers*"
          value={formData.numberofTravellers}
          onChange={handleInputChange}
        />

        <input
          type="number"
          id="budget"
          name="budgetPerPerson"
          required
          placeholder="Budget per Person (in USD)*"
          value={formData.budgetPerPerson}
          onChange={handleInputChange}
        />

        <div
          style={{
            width: "90%",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "50%",
          }}
        >
          <p
            style={{
              width: "100%",
              height: "70px",
              color: "white",
              textAlign: "center",
              borderRadius: "20px",

              background: "rgb(55, 55, 108)",
            }}
          >
            Net Budget ${calculateNetBudget()}
          </p>
          <button
            type="submit"
            style={{
              color: "black",
              borderRadius: "20px",
              height: "50px",
              background: "pink",
              width: "25%",
              border: "none",
              padding: "20px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
