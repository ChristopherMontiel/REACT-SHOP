import {useEffect, useState} from 'react';
import axios from 'axios';


const useGetProducts = (API) => {
  //Manejo de estado de los productos con useState:
  const [products, setProducts] = useState([]);

  //Consumir la api con useEffect:
  useEffect(async() =>  {
    const response = await axios(API);
    setProducts(response.data);
  }, []);//Arreglo vacío por que no vamos a escuchar ningun elemento de momento.

    
  return products;
}

export default useGetProducts;