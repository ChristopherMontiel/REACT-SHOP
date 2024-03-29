import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss'
import addToCartImg from '@icons/bt_add_to_cart.svg'

const ProductItem = ( { product } ) => {
  const { addToCart } = useContext(AppContext);
  
  const handleClick = item => {
    //addToCart(item);
    let now= new Date();
    console.log('el id del producto será', item.id + '' + now.getTime());
    
    addToCart({
      title: item.title,
      images: item.images,
      price: item.price,
      id: item.id + now.getTime()
    });
  }

  return (
    <div className="ProductItem">
      <img src= { product.images[0] } alt= { product.title} />
      <div className="product-info">
        <div>
          <p> ${ product.price }</p>
          <p> { product.title } </p>
        </div>
        <figure onClick={() => handleClick(product)}>
            <img src= {addToCartImg} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;