import React, { Component } from "react";
import PropTypes from 'prop-types';



class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
    

    

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.info(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="error-wrapper">
          <h2 className="error-boundary">Ooops! Error occured</h2>
          <h2 className="error-boundary">Please try again later.</h2>
          <button className="submit-button" onClick={() => history.back()}>
            Back
          </button>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
    children: PropTypes.any.isRequired
}

export default ErrorBoundary;
