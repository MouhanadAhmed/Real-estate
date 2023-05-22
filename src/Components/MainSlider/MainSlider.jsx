// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements


// import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from '../../assets/Images/11.jpg';
import slide2 from '../../assets/Images/12.jpg';
import slide3 from '../../assets/Images/13.jpg';

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import styles from './MainSlider.module.css';
register();
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}

        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper lg:h-3/6 max-h-3/6 w-screen mx-0 px-0 "
      >
        <SwiperSlide >
          <figure  className='relative'>
        <img  src={slide1} className='max-w-none h-3/4 brightness-50 ' alt="slider-1" />
        <figcaption className=' absolute  bg-dark top-0 bottom-0 text-center w-screen lg:py-28 flex align-items-center justify-center'>
          <div className=" text-white  lg:mt-5 sm:pt-16 lg:py-5 sm:py-0 align-bottom">
              <h6 className='md:pb-0 md:mb-0 lg:mb-5 xl:mb-14'><span><i className="fas fa-home"></i></span> Real Estate Agency</h6>
              <h1>Find Your Dream <br/> House By Us</h1>
              <div className=' w-3/5 mx-auto px-5 lg:mb-12'>
                <p className='fs-6 px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              <div className="btn-wrapper  go-top">
                <button className={styles.theme} href="#/shop" tabIndex="0">Make An Enquiry</button>
              </div>
        </div>
          </figcaption>
          </figure>


        </SwiperSlide>
        <SwiperSlide>
        <figure  className='relative'>
        <img  src={slide2} className='brightness-50 ' alt="slider-2" />
        <figcaption className='absolute bg-opacity-50 bg-dark top-0 bottom-0 text-center w-screen lg:py-28 flex align-items-center justify-center'>
          <div className=" text-white sm:pt-16 sm:py-0 lg:mt-5 lg:py-5 align-bottom w-50 ms-auto">
              <h6 className='md:pb-0 md:mb-0'><span><i className="fas fa-home"></i></span> Real Estate Agency</h6>
              <h1 className='fw-bolder md:pt-0 '>Find Your Dream <br/> House By Us</h1>
              <div className=' w-3/5 mx-auto px-5 lg:mb-12 '>
                <p className='fs-6 px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              <div className="btn-wrapper animated go-top">
                <button className={styles.theme} href="#/shop" tabIndex="0">Make An Enquiry</button>
              </div>
        </div>
          </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure  className='relative'>
        <img  src={slide3} className='brightness-50 ' alt="slider-2" />
        <figcaption className=' absolute bg-opacity-50 bg-dark top-0 bottom-0 text-center w-screen lg:py-28 flex align-items-center justify-center'>
          <div className=" text-white sm:pt-16 sm:py-0 lg:mt-5 lg:py-5 align-bottom w-50 me-auto">
              <h6 className='md:pb-0 md:mb-0'><span><i className="fas fa-home"></i></span> Real Estate Agency</h6>
              <h1 className='fw-bolder'>Find Your Dream <br/> House By Us</h1>
              <div className='w-3/5 mx-auto px-5 lg:mb-12'>
                <p className='fs-6 px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              <div className="btn-wrapper animated go-top">
                <button className={styles.theme} href="#/shop" tabIndex="0">Make An Enquiry</button>
              </div>
        </div>
          </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
