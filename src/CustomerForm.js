import React, { useState } from "react";
import CustomerInput from "./CustomerInput";
import ValidationStatus from "./ValidationStatus";
import CustomerDetails from "./CustomerDetails";
import "./CustomerForm.css";

const CustomerForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      address: {
        streetNumber,
        streetName,
        city,
        state,
        zipCode,
      },
    };

    try {
      const response = await fetch("http://localhost:8080/customer/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Assuming the API response has a 'status' field
      const apiStatus = result.status;

      // Set the status color based on success or failure
      if (apiStatus === "success") {
        setStatus({ text: apiStatus, color: "green" });
      } else {
        setStatus({ text: apiStatus, color: "red" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Set status to red on error
      setStatus({ text: "Error", color: "red" });
    }
  };

  return (
    <div>
      <h2>Customer Form</h2>
      <form onSubmit={handleSubmit}>
        <CustomerInput
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <CustomerInput
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <CustomerInput
          label="Street Number"
          value={streetNumber}
          onChange={(e) => setStreetNumber(e.target.value)}
          required
        />
        <CustomerInput
          label="Street Name"
          value={streetName}
          onChange={(e) => setStreetName(e.target.value)}
          required
        />
        <CustomerInput
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <CustomerInput
          label="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <CustomerInput
          label="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {status && (
        <div>
          <ValidationStatus status={status} />
          <CustomerDetails
            firstName={firstName}
            lastName={lastName}
            streetNumber={streetNumber}
            streetName={streetName}
            city={city}
            state={state}
            zipCode={zipCode}
          />
        </div>
      )}
    </div>
  );
};

export default CustomerForm;
