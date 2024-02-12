import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
        <Header />
        {/* this outlet will be changes dynamically! */}
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout