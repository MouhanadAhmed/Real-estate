//import React from 'react'
// import Card from 'react-bootstrap/Card';
import Img1 from '../../Assets/Images/21.png'
import Img2 from '../../Assets/Images/22.png'
import Img3 from '../../Assets/Images/23.png'

// import { Link } from 'react-router-dom';
export default function OurServices() {
  return <>
    <div className=" bg-white py-20">
    <div className="container pt-5 text-center">
    <h6 className='text-orange-600 bg-rose-100 w-32 mx-auto rounded-full '>Our Services</h6>
    <h1 className='text-black mb-20'>Our Main Focus</h1>
    
    <div className="flex flex-wrap gap-6	justify-center items-center">
      <div className="lg:basis-1/4 md:basis-1/3 basis-1/2">
      <div className="-mt-2 p-2 lg:mt-0 ">
            <div className="rounded-none border-4 border-solid border-white hover:animate-border-pulse group  hover:border-b-orange-600 bg-white py-10 text-center shadow-xl  ">
              <div className="mx-auto max-w-xs ">
                <img src={Img1} className='w-48 mx-auto' alt="buy a home" />
                <a
                  href="#"
                  className="mt-4 block w-full px-3  text-center text-xl font-bold text-black  hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Buy a home
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                </p>
                <h3 className='text-black mt-4 group group-hover:text-orange-400'>Find A Home <i className='fa-solid fa-arrow-right'></i> </h3>
              </div>
            </div>
      </div></div>
      <div className="lg:basis-1/4 md:basis-1/3 basis-1/2">
      <div className="-mt-2 p-2 lg:mt-0 ">
      <div className="rounded-none border-4 border-solid border-white hover:animate-border-pulse group  hover:border-b-orange-600 bg-white py-10 text-center shadow-xl  ">
              <div className="mx-auto max-w-xs ">
                <img src={Img2} className='w-48 mx-auto' alt="buy a home" />
                <a
                  href="#"
                  className="mt-4 block w-full px-3  text-center text-xl font-bold text-black  hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Rent a home
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                </p>
                <h3 className='text-black mt-4 group group-hover:text-orange-400'>Find A Home <i className='fa-solid fa-arrow-right'></i> </h3>
              </div>
            </div>
      </div>

  </div>
  <div className="lg:basis-1/4 md:basis-1/3 basis-1/2">
      <div className="-mt-2 p-2 lg:mt-0 ">
      <div className="rounded-none  border-4 border-solid border-white hover:animate-border-pulse group  hover:border-b-orange-600 bg-white py-10 text-center shadow-xl  ">
              <div className="mx-auto max-w-xs ">
                <img src={Img3} className='w-48 mx-auto' alt="buy a home" />
                <a
                  href="#"
                  className="mt-4 block w-full px-3  text-center text-xl font-bold text-black  hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Sell a home
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                </p>
                <h3 className='text-black mt-4 group group-hover:text-orange-400'>Find A Home <i className='fa-solid fa-arrow-right'></i> </h3>
              </div>
            </div>
      </div>
    </div></div></div></div>
  </>
}


