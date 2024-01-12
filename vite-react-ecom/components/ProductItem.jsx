import React from 'react';
import * as Prime from '../config/PrimeConfig';

export default function ProductItem({ singleProduct }) {
  const { title, description, thumbnail, brand } = singleProduct;

  const header = <img alt='Card' src={thumbnail} />;
  const footer = (
    <>
      <Prime.Button label='Cart' icon='pi pi-check' />
      <Prime.Button
        label='More'
        severity='secondary'
        icon='pi pi-times'
        style={{ marginLeft: '0.5em' }}
      />
    </>
  );

  return (
    <div className='card flex justify-content-center'>
      <Prime.Card
        title={title}
        subTitle={brand}
        footer={footer}
        header={header}
        className='md:w-25rem'
      >
        <p className='m-0'>{description}</p>
      </Prime.Card>
    </div>
  );
}
