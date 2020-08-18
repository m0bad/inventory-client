import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, productsSelectors } from '../../store/products/productSlice';
import ProductsContainer from '../../components/products/products-container/ProductsContainer';
import { IProduct } from '../../types/product';
import { ProductCard } from '../../components/products/product-card';

export const Products = () => {
  const dispatch = useDispatch();
  const products: IProduct[] = useSelector(state => productsSelectors.selectAll(state));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductsContainer title="Products">
      {products.map(product => (
        <ProductCard {...product} />
      ))}
    </ProductsContainer>
  );
};
