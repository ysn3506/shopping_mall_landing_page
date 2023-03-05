import React, { useState} from "react";

function NewsLetterSubscription() {
    const [isSend, setIsSend] = useState(false);
    
    const handleSubmit = () => {
        setIsSend(true);
    }
  return (
    <div className="ui form success submit-form">
      <div className="field">
        <input type="email" placeholder="joe@schmoe.com" />
      </div>
      {isSend && (
        <div className="ui success message successful">
          <div className="header">Subscription is completed</div>
          <p>You are all signed up for the newsletter.</p>
        </div>
      )}
      <div className="submit-button" onClick={handleSubmit}>
        Submit
      </div>
    </div>
  );
}

export default NewsLetterSubscription;
