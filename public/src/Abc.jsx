import React, { useState } from 'react';
import './Abc.css';
import RedSqure from './redSqure';

function Abc() {


let [name, setButtonText] = useState('Alex'); // Initial state set to "A"

 const handleClick = () => {
    setButtonText(name === 'Alex' ? 'Shalev' : 'Alex'); // Toggle between "A" and "B"
};
  return (
    
    <React.Fragment>
      <h1>{name}</h1>
      <button onClick={handleClick}>press</button>
      <RedSqure/>
    </React.Fragment>

  )
}

export default Abc