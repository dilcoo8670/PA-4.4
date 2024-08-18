import React, { useState } from 'react';
import Button from './components/Button';

function App() {

  const [message, setMessage] = useState("");

  function handleButton() {
    setMessage("Button Pressed!");
  }

  return (
    <div>
      <h1>{message}</h1>
      <Button onClick={handleButton}>
        Press the button
      </Button>
    </div>
  );
}

export default App;