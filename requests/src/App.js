import React, { useState } from 'react'
import BetterRequests from './BetterRequests';
import NewRequests from './NewRequests';
import Requests from './Requests';

export default function App() {

  const [state, setState] = useState(false);
  const [testAxios, setTestAxios] = useState(false);
  const [testHook, setTestHook] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => setState(!state)}>Mostrar os nossos requests</button>
      {state && (<Requests />)}
      <br />
      <br />
      <br />
      <button onClick={() => setTestAxios(!testAxios)}>Testando o AXIOS agora! </button>
      {testAxios && (<NewRequests />)}
      <br />
      <br />
      <br />
      <h1>Melhorando a forma de fazer Requests</h1>
      <button onClick={() => setTestHook(!testHook)}>Testando a forma melhor de fazer Requests </button>
      {testHook && (<BetterRequests />)}

    </>
  );
}