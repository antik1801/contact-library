import React from 'react'
import ResNavbar from '../components/shared/Navbar/Navbar'
import Footer from '../components/shared/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './Main.css';

const Main = () => {
  return (
    <div>
      <ResNavbar />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
