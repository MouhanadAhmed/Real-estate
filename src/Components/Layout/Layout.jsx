import React from 'react'
import'./Layout.module.css'
import NavBar from '../NavBAr/NavBAr';
import { Outlet, useNavigate } from 'react-router-dom'
// import Footer from '../Footer/Footer'

export default function Layout({userData ,setUserData}) {
  let navigate = useNavigate();

  function logOut(){
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }
  return (
    <>
    <NavBar userData={userData} logOut={logOut}/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}
