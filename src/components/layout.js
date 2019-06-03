import React from 'react';
import Header from './newHeader';
import Footer from './newFooter';
import '../styles/main.scss'


function Layout({children}) {
  return (
    <>
    <Header/>
    <main>
        {children}
    </main>
    <Footer/>
    </>
  );
}

export default Layout;
