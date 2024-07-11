import React from "react";

const Loading = () => {
  return (
    <div className="text-center">
      <div className="spinner-border text-info" role="status">
        <div className="visually-hidden">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
