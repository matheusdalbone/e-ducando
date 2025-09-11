import React from 'react';

import Navbar from '../../widgets/NavbarSection/Navbar';
const Layout = ({ children } ) => {

  return (
    <>
      <Navbar></Navbar>
      <main style={{paddingTop: '0px'}}>
        { children }
      </main>
      {/* Componente do Footer */}
    </>
  )
}

export default Layout;