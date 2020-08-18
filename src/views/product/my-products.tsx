import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'antd';
import { fetchMyProducts, productsSelectors } from '../../store/products/productSlice';
import { IProduct } from '../../types/product';
import { ProductsTable } from '../../components/products/products-table';

export const MyProducts = () => {
  const dispatch = useDispatch();
  const myProducts: IProduct[] = useSelector(state => productsSelectors.selectAll(state));

  useEffect(() => {
    dispatch(fetchMyProducts());
  }, [dispatch]);

  return (
    <div>
      <Row gutter={16}>
        <Col span={20} />
        <Col span={4}>
          <Button type="primary" onClick={() => null} style={{ width: '100%', margin: '10px' }}>
            Create new product
          </Button>
        </Col>
      </Row>
      <ProductsTable products={myProducts} />
    </div>
  );
};
