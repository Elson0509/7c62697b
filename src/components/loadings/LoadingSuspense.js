import React from "react";

const LoadingSuspense = () => {
  return (
    <div className="spinner-border text-info" role="status">
      <div className="visually-hidden">Loading...</div>
    </div>
  );
};

export default LoadingSuspense;
