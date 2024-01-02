import { useState } from 'react';
import { Button } from 'primereact/button';
function App() {
  return (
    <>
      <div className='card flex flex-column align-items-center py-4 justify-content-center'>
        <h1>Prime React Starter Project (OCEM Sandbox)</h1>
        <Button label='Check' icon='pi pi-check' />
      </div>
    </>
  );
}

export default App;
