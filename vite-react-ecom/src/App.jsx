import { useState } from 'react';
import { Camera } from 'lucide-react';
import Icon from '../components/Icon';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='container'>
        <h1>Hello World App</h1>
        <Camera color='red' size={48} />;
        <Icon name={'Home'} size={48} color={'green'} />
      </div>
    </>
  );
}

export default App;
