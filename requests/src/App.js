import React, { useState } from 'react'
import Requests from './Requests';

export default function App() {

  const [state, setState] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => setState(!state)}>Mostrar os nossos requests</button>
      {state && (<Requests />)}
    </>
  );
}