import { useState } from 'react';
import { Camera } from 'lucide-react';
import Icon from '../components/Icon';
import * as Prime from '../config/PrimeConfig';
import LandingPage from '../pages/LandingPage';
import Posts from '../components/Posts';

function App() {
  return (
    <>
      <Posts />
      <LandingPage />
      {/* <div className='container'>
        <div className='card flex gap-4 p-4 justify-content-center'>
          <h1>Hello World App</h1>
          <Prime.Button label='Check' icon='pi pi-check' />
          <Camera color='red' size={48} />;
          <Icon name={'Home'} size={48} color={'green'} />
        </div>
      </div> */}
    </>
  );
}

export default App;
