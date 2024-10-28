import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.css'; // Import the CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status" variant="primary" className="loader-spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h3 className="loading-text">Loading, please wait...</h3>
    </div>
  );
};

export default Loader;