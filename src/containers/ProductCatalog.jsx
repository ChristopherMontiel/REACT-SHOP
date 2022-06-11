import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductCatalog.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductCatalog = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(product => (
          <ProductItem product = {product} key = {product.id} /> 
        ))}
      </div>
    </section>
  );
}

export default ProductCatalog;