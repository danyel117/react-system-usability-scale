import { useState } from 'react';
import SUS from './components/SUS';

function App() {
  const [sus, setSus] = useState('0');
  return (
    <div className='App'>
      <SUS result={parseInt(sus, 10)} />
      <input
        type='number'
        max={100}
        min={1}
        onChange={(e) => {
          setSus(e.target.value);
        }}
        value={sus}
      />
    </div>
  );
}

export default App;
