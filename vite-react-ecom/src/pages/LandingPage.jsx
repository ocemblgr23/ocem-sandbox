import React, { useEffect, useState } from 'react';
import * as Prime from '../../config/PrimeConfig';
import axios, { CancelToken } from 'axios';
import ProductItem from '../../components/ProductItem';

export default function LandingPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const apiUrl = 'https://dummyjson.com/products';

  // GET with axios API
  useEffect(() => {
    const source = axios.CancelToken.source();

    const loadProducts = async () => {
      try {
        const { data } = await axios.get(apiUrl, {
          cancelToken: source.token,
        });
        const { products } = data;
        console.log(products);

        const categoryList = products.map((p) => p.category);
        const uniqueCategory = [...new Set(categoryList)];
        setCategories(uniqueCategory);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
    // Clean up function
    return () => {
      console.log('Clean up');
      // Cancle the duplicate request
      source.cancel('API Request canceled');
    };
  }, []);

  return (
    <>
      <div>
        <Prime.Divider align='right'>
          <Prime.Button
            label='Products Showcase'
            icon='pi pi-search'
            className='p-button-outlined'
          ></Prime.Button>
        </Prime.Divider>
        {/* <h1 className='py-2 text-center'>Products Showcase</h1> */}
        {/* Product Grid */}
        <div className='grid'>
          {/* <div className='col-12 md:col-3 lg:col-3'>
            <div className='text-center p-3 border-round-sm font-bold'>
              <div className='flex flex-column  gap-5 '>
                {categories.length > 0 ? (
                  categories.map((cat, index) => {
                    return <Prime.Chip key={index} label={cat} />;
                  })
                ) : (
                  <Prime.ProgressSpinner />
                )}
              </div>
            </div>
          </div> */}
          <div className='col-12 md:col-12 lg:col-12'>
            <div className='p-3 border-round-sm font-bold'>
              <div className='flex justify-content-center  gap-5 py-4'>
                {categories.length > 0 ? (
                  categories.map((cat, index) => {
                    return <Prime.Chip key={index} label={cat} />;
                  })
                ) : (
                  <h1 className='text-primary'>Loading....</h1>
                )}
              </div>
              <div className='flex gap-2   justify-content-center  flex-wrap'>
                {products.length > 0 ? (
                  products.map((p, index) => {
                    return <ProductItem key={index} singleProduct={p} />;
                  })
                ) : (
                  <Prime.ProgressSpinner />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Product Grid */}
      </div>
      ;
    </>
  );
}
