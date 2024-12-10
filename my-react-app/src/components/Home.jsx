import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For navigation

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '30px' }}>
      <h1 style={{ color: '#007bff', textAlign: 'center' }}>
        Welcome to the Comic Book Store
      </h1>

      {/* Image from public/assets folder */}
      <Image
        src="/assets/comic_store.png"  // Correct image path relative to public folder
        alt="Welcome Image"
        fluid
        style={{ display: 'block', margin: '0 auto', marginBottom: '30px' }}
      />

      {/* Shop Now Button */}
      <Button
        variant="primary"
        size="lg"
        style={{
          display: 'block',
          margin: '0 auto',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>
          Shop Now
        </Link>
      </Button>

      {/* Featured Products Card */}
      <Card style={{ marginTop: '20px', borderRadius: '10px' }}>
        <Card.Body>
          <Card.Title>Featured Products</Card.Title>
          <Card.Text>
            Explore our collection of the latest and greatest comic books!
          </Card.Text>
          <Button variant="secondary" href="/shop">
            Browse Products
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
