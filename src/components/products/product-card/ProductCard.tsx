import React from 'react';
import { Button, Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';

import './Card.scss';

type Prop = {
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ name, price, image }: Prop) {
  return (
    <Col>
      <Card>
        <CardImg
          top
          width="100%"
          src={
            image ||
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
          }
          alt="product image"
        />
        <CardBody>
          <CardTitle className="product-name">{name}</CardTitle>
          <Row xs={2} lg={2}>
            <Col>
              <small className="text-muted">Price</small>
              <p>{price}</p>
            </Col>
          </Row>
          <Button color="primary">Add To Cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
