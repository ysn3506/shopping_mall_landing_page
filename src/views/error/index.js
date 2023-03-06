import React from "react";
import { useNavigate } from "react-router-dom";


function ErrorView() {
  const navigate = useNavigate();
  return (
    <div className="error-wrapper">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        className="submit-button"
        onClick={() => navigate(-1)}
      >Back</button>
    </div>
  );
}

export default ErrorView;
