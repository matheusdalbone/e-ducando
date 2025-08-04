import React from 'react';

import Navbar from '../../Navbar';
const Layout = ({ children } ) => {

  return (
    <>
      <Navbar></Navbar>
      { children }
      {/* Componente do Footer */}
    </>
  )
}

export default Layout;