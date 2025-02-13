import React, { useState } from 'react';

const RedSqure = () => {
  const [text, setText] = useState(''); // Create a state variable to hold the text

  const handleInputChange = (event) => {
    setText(event.target.value); // Update the state with the input's value
  };

  return (
    <div>
        <br></br>      
        <textarea
        onInput={handleInputChange} // Event that triggers on input change
        value={text} // This binds the textarea to the state
        placeholder="Type something..."
      />
      <h1 className="redSqure">{text}</h1>
      <h1 className="redSqure">{text}</h1>
      <h1 className="redSqure">{text}</h1>
      <h1 className="redSqure">{text}</h1> {/* Display the entered text below the input */}
    </div>
  );
};

export default RedSqure;
