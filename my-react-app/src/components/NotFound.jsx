import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1>Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button variant="primary">Go to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFound;
