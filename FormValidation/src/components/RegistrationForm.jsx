import React, { useState } from "react";

function RegistrationForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age < 18) {
      setError("Age must be 18 or above");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Registration Successful!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Age:</label><br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Submit</button>

      </form>

      {/* Conditional Rendering */}

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

    </div>
  );
}

export default RegistrationForm;