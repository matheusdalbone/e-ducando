import React from 'react';

import Navbar from '../../widgets/NavbarSection/Navbar';
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