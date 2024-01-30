// CustomerDetails.js
import React from "react";

const CustomerDetails = ({
  firstName,
  lastName,
  streetNumber,
  streetName,
  city,
  state,
  zipCode,
}) => (
  <div>
    <h2>Customer Details</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`${firstName} ${lastName}`}</td>
          <td>
            <div>{`Street Number: ${streetNumber}`}</div>
            <div>{`Street Name: ${streetName}`}</div>
            <div>{`City: ${city}`}</div>
            <div>{`State: ${state}`}</div>
            <div>{`Zip Code: ${zipCode}`}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CustomerDetails;
