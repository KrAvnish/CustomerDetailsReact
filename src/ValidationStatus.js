import React from "react";

const ValidationStatus = ({ status }) => {
  const statusColor = status === "success" ? "green" : "red";

  return (
    <div style={{ color: statusColor }}>
      <h3>Validation Status: {status}</h3>
    </div>
  );
};

export default ValidationStatus;
