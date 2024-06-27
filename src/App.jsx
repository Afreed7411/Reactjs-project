import React, { useState } from 'react';
import Products from './products'; // Assuming Products is the correct component name

function App() {
  const [a, b] = useState(70);

  return (
    <div className='w-full h-screen p-5 bg-zinc-900 text-white'>
      <h1>{a}</h1>
      <button onClick={() => b(a + 1)} className='bg-blue-500 text-white'>
        Click
      </button>
      <Products />
    </div>
  );
}

export default App;
