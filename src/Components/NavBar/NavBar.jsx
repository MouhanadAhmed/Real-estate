import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../Assets/Images/logo-2.png'
import logoDark from '../../assets/Images/logo.png'
import { Link ,NavLink} from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import {
  Sidenav,
  Offcanvas,
  Ripple,
  Dropdown,
  initTE,
} from "tw-elements";
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: 'services', current: false },
  { name: 'Projects', href: 'projects', current: false },
  { name: 'Blogs', href: 'blogs', current: false },
  { name: 'About us', href: 'aboutus', current: false },
  { name: 'Contact us', href: 'contactus', current: false },
  { name: 'Login', href: 'login', current: false },
  { name: 'Register', href: 'register', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
initTE({ Sidenav, Offcanvas, Ripple, Dropdown });






export default function NavBar() {

  const [bgColor,setBgColor] =useState("transparent");
  const [textColor,setTextColor] =useState("white");
  const [logoColor,setLogoColor] =useState(logo);
  const [topValue,setTopValue]=useState("10");


  window.onscroll = function() {scrollFunction()};
 
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      setBgColor("white");
      setTextColor("black");
      setLogoColor(logoDark);
      setTopValue("0");
    } else {
     
      setBgColor("transparent");
      setTextColor("white");
      setLogoColor(logo);
      setTopValue("10");
    }
  }
  


  return (<>
  <div className="flex sm:flex-col md:flex-row justify-center items-center bg-[#041722] static  right-0 left-0 pb-0">
    <div className="me-auto md:block sm:flex sm:flex-col basis-1/2">
    <a href="" className='text-white text-xs sm:m-0 lg:me-8 hover:text-orange-600'><i className="fa-regular fa-envelope text-orange-600"></i> info@webmail.com</a>
    <a href="" className='text-white text-xs hover:text-orange-600'><i className="fa-solid fa-location-dot text-orange-600"></i> 15/A, Nest Tower, NYC</a>
    </div>
      <div className="ms-auto sm:basis-1/3 basis-1/2">
      <i className="fa-brands fa-facebook-f me-2"></i>
      <i className="fa-brands fa-twitter me-2"></i>
      <i className="fa-brands fa-instagram me-2"></i>
      <i className="fa-brands fa-dribbble me-2"></i>
      <button className='bg-orange-600 rounded-none text-xs group mt-0 hover:bg-orange-700 hover:border-orange-600'>
      <Link className='text-white me-2 group group-hover:text-white b '> Add to  Listing</Link>
      </button>
    

      </div>
  </div>
<Disclosure as="nav" id="navbar" className={` px-4 z-50 fixed top-${topValue} left-0 right-0 bg-${bgColor} scroll:absolute`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white " data-te-sidenav-toggle-ref
  data-te-target="#sidenav-5"
  aria-controls="#sidenav-5"
  aria-haspopup="true">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className=" right-0 block h-6 w-6" aria-hidden="true"  />

                  ) : (
                    <Bars3Icon className="block h-6 w-6"  />
                  )}
                </Disclosure.Button>


{/* 
                <div className="flex space-x-2">
  <div>
    <a
      className="mr-1.5 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      data-te-offcanvas-toggle
      href="#offcanvasExample"
      role="button"
      aria-controls="offcanvasExample">
      Link with href
    </a>
    <button
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      type="button"
      data-te-offcanvas-toggle
      data-te-target="#offcanvasExample"
      aria-controls="offcanvasExample">
      Button with data-te-target
    </button>

    <div
      className="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      data-te-offcanvas-init>
      <div className="flex items-center justify-between p-4">
        <h5
          className="mb-0 font-semibold leading-normal"
          id="offcanvasExampleLabel">
          Offcanvas
        </h5>
        <button
          type="button"
          className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-offcanvas-dismiss>
          <span
            className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                // stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <div>
          Some text as placeholder. In real life you can have the elements
          you have chosen. Like, text, images, lists, etc.
        </div>
        <div className="relative mt-4" data-te-dropdown-ref>
          <button
            className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
            type="button"
            id="dropdownMenuButton"
            data-te-dropdown-toggle-ref
            data-te-ripple-init
            data-te-ripple-color="light">
            Dropdown button
            <span className="ml-2 w-2">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512">
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
              </svg>
            </span>
          </button>
          <ul
            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton"
            data-te-dropdown-menu-ref>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-100 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500"
                href="#"
                data-te-dropdown-item-ref
                >Action
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-100 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500"
                href="#"
                data-te-dropdown-item-ref
                >Another action
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-100 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500"
                href="#"
                data-te-dropdown-item-ref
                >Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div> */}







              </div>
              <div className="flex flex-1 items-center justify-between lg:items-stretch lg:justify-between">
                 <Link to={"/"}>
                <div className="flex flex-shrink-0 items-center ps-12">
               
                <img className="block h-8 w-auto " src={`${logoColor}`} alt="logo"  />
               
                </div>
                 </Link>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
    
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? `bg-orange-600 text-${textColor} active:bg-orange-600` : `text-${textColor} hover:bg-orange-500 hover:text-${textColor} active:bg-orange-600`,
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* <button
  className={`mt-2 inline-block rounded bg-transparent px-6 py-2.5 text-xs font-medium uppercase leading-tight text-${textColor} shadow-md transition duration-150 ease-in-out hover:bg-orange-500 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:orange-800`}
  data-te-sidenav-toggle-ref
  data-te-target="#sidenav-5"
  aria-controls="#sidenav-5"
  aria-haspopup="true">
  <span className={`block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-${textColor}`}>
  <i className="fa-solid fa-bars"></i>
  </span>
</button> */}
          <nav
  id="sidenav-5"
  className="lg:hidden fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
  data-te-sidenav-init
  data-te-sidenav-hidden="true"
  data-te-sidenav-accordion="true">
    <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-orange-600 text-black active:bg-orange-600' : 'text-black hover:bg-orange-500 hover:text-black active:bg-orange-600',
                    'block rounded-md px-3 py-2 text-black text-base font-medium active:bg-orange-600'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  
                >
                  {item.name}
                </Link>
              ))}
            </div>
</nav>
  {/* <ul className="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
    <li className="relative">
      <a
        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        data-te-sidenav-link-ref>
        <span
          className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
        </span>
        <span>Link 1</span>
      </a>
    </li>
    <li className="relative">
      <a
        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        data-te-sidenav-link-ref>
        <span
          className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
              clip-rule="evenodd" />
          </svg>
        </span>
        <span>Category 1</span>
        <span
          className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
          data-te-sidenav-rotate-icon-ref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </a>
      <ul
        className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
        data-te-sidenav-collapse-ref>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref
            >Link 2</a
          >
        </li>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref
            >Link 3</a
          >
        </li>
      </ul>
    </li>
    <li className="relative">
      <a
        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        data-te-sidenav-link-ref>
        <span
          className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
              clip-rule="evenodd" />
          </svg>
        </span>
        <span>Category 2</span>
        <span
          className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
          data-te-sidenav-rotate-icon-ref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </a>
      <ul
        className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
        data-te-sidenav-collapse-ref>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref
            >Link 4</a
          >
        </li>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref
            >Link 5</a
          >
        </li>
      </ul>
    </li>
  </ul> */}





          {/* <Disclosure.Panel className={`lg:hidden text-${textColor}  bg-white `}>




                    <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-orange-600 text-black active:bg-orange-600' : 'text-black hover:bg-orange-500 hover:text-black active:bg-orange-600',
                    'block rounded-md px-3 py-2 text-black text-base font-medium active:bg-orange-600'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            
  


          </Disclosure.Panel> */}
             {/* flowbite */}

             {/* <div id="drawer-navigation" className="bg-white fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
  {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-orange-600 text-white active:bg-orange-600' : 'text-black hover:bg-orange-500 hover:text-black active:bg-orange-600',
                    'block rounded-md px-3 py-2 text-black text-base font-medium active:bg-orange-600'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  
                >
                  {item.name}
                </Disclosure.Button>
              ))}
   </div>
</div> */}

   
                            {/* flowbite */}
        </>
      )}
    </Disclosure>
  </>
    
  )
}
