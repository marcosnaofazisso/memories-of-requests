import React from 'react'
import AppRoutes from './AppRoutes';
import Header from './Header';
// import Requests from './Requests';

export default function App() {

  return (
    <>
      <div>
        <Header />
        <AppRoutes />
      </div>
    </>
  );
}