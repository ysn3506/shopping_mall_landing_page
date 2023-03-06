import React from "react";
import { useNavigate } from "react-router-dom";

function PlanYourVisitView() {
  const navigate = useNavigate();
  return (
    <div className="error-wrapper">
      <h1>The Best Shopping Experience</h1>
      <button className="submit-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default PlanYourVisitView;
