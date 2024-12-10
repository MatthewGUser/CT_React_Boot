import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Shop = () => {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Welcome to the Shop</h1>

      {/* Sample Product Card */}
      <Card style={{ marginBottom: '20px', borderRadius: '10px' }}>
        <Card.Body>
          <Card.Title>Comic Book 1</Card.Title>
          <Card.Text>
            A thrilling new adventure awaits in this comic book series.
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ marginBottom: '20px', borderRadius: '10px' }}>
        <Card.Body>
          <Card.Title>Comic Book 2</Card.Title>
          <Card.Text>
            Dive into this epic saga full of action and mystery.
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Shop;
