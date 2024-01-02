import { useState } from 'react';
import * as Prime from '../config/PrimeConfig';
function App() {
  const header = (
    <img
      alt='Card'
      src='https://primefaces.org/cdn/primereact/images/usercard.png'
    />
  );
  const footer = (
    <>
      <Prime.Button label='Save' icon='pi pi-check' />
      <Prime.Button
        label='Cancel'
        severity='secondary'
        icon='pi pi-times'
        style={{ marginLeft: '0.5em' }}
      />
    </>
  );

  return (
    <>
      <div className='card flex flex-column align-items-center py-4 justify-content-center'>
        <h1>Prime React Starter Project (OCEM Sandbox)</h1>
        <Prime.Button label='Check' icon='pi pi-check' />
      </div>

      <div className='card flex justify-content-center py-2'>
        <Prime.Card
          title='Title'
          subTitle='Subtitle'
          footer={footer}
          header={header}
          className='md:w-25rem'
        >
          <p className='m-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Prime.Card>
      </div>
    </>
  );
}

export default App;
