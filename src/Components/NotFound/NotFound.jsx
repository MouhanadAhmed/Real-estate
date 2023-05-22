import React from 'react'
import styles from './NotFound.module.css'
import errorImg from '../../Assets/Images/error-1.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <div className="bg-white">
    <div className="container ">
      <div className="row py-48">
    <img className='w-50 m-auto py-5' src={errorImg} alt="404 Not Found" />
      <h2 className='text-blue-950 font-extrabold text-7xl mb-6'>Page Not Found!</h2>
      <p className='text-blue-950 mb-6'>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
      <button className='bg-orange-500 hover:bg-white hover:border-2 group hover:border-black hover:text-black'>
        <Link className='text-white group group-hover:text-black' to={"/"} >
        <i className="fa-solid fa-arrow-left-long"></i>  BACK TO HOME</Link> </button>
      </div>
    </div>
    </div>

    </>
  )
}
