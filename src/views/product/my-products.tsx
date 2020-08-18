import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Modal } from 'antd';
import { createProduct, fetchMyProducts, productsSelectors } from '../../store/products/productSlice';
import { IProduct, IProductPayload } from '../../types/product';
import { ProductsTable } from '../../components/products/products-table';
import { NewProductForm } from '../../components/products/new-product-form';

export const MyProducts = () => {
  const dispatch = useDispatch();
  const myProducts: IProduct[] = useSelector(state => productsSelectors.selectAll(state));
  const [visible, setVisible] = useState<Boolean>(false);

  useEffect(() => {
    dispatch(fetchMyProducts());
  }, [dispatch]);

  const handleSubmit = useCallback(
    async (payload: IProductPayload) => {
      await dispatch(createProduct(payload));
      await dispatch(fetchMyProducts());
      setVisible(false);
    },
    [dispatch],
  );

  const handleCreateProduct = useCallback(() => {
    setVisible(true);
  }, []);
  return (
    <div>
      <Row gutter={16}>
        <Col span={20} />
        <Col span={4}>
          <Button type="primary" onClick={handleCreateProduct} style={{ width: '100%', margin: '10px' }}>
            Create new product
          </Button>
        </Col>
      </Row>
      <ProductsTable products={myProducts} />
      <Modal
        title="Add product"
        visible={visible as boolean}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <NewProductForm onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};
