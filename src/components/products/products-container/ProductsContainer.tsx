import React from 'react';
import { Row } from 'reactstrap';

type Props = {
  title: string;
  children: React.ReactElement[];
};

export default function ProductsContainer({ title, children }: Props) {
  return (
    <div className="product-list">
      <div className="product-title">
        <h3>{title}</h3>
      </div>
      <div className="product-cards">
        <Row xs={1} lg={3}>
          {children}
        </Row>
      </div>
    </div>
  );
}
