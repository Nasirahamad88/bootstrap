// Card.jsx
import React from 'react';
import productsData from './Card.json';
import { Row, Col, Card, Button } from 'react-bootstrap';

function ProductCard() {
  return (
    <div className='all-card my-5 '>
      <div>
        <h2 className="my-5 mb-4 ms-10">Products</h2> {/* Added Bootstrap margin-bottom and text-center classes */}
      </div>
      <Row xs={1} md={2} lg={4} className="g-2 mx-3 "> {/* Added Bootstrap margin class */}
        {productsData.map((product, index) => (
          <Col key={index}>
            <Card className='bg-gray-400 hover:bg-sky-400 text-black mx-auto mb-4' style={{ width: '22rem', height: '30rem' }}>
              <Card.Img className='mx-auto' style={{ width: '16rem', height: '16rem' }} variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <Card.Text>Rating: {product.rating}</Card.Text>
                <Button>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductCard;
