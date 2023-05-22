// import { useState } from 'react'

import './App.css'
// import NavBar from './Components/NavBar/NavBar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login';

function App() {
  // const [count, setCount] = useState(0)

  const routes= createBrowserRouter([
    { path:"",
    element: <Layout /> ,
    children:[
      {index:true, element:<ProtectedRoute> <Home/></ProtectedRoute> },
      {path:"login", element:<Login />},
      {path :"register", element:<Register/>, children:[
        {index:true, element:<Register/>},
        {path:"login", element:<Login />}
      ]},
      // {path:"cart", element:<ProtectedRoute><Cart/></ProtectedRoute>}, 
      // {path:"brands", element:<ProtectedRoute><Brands/></ProtectedRoute>}, 
      // {path:"brandproducts/:id", element:<ProtectedRoute><BrandProducts/></ProtectedRoute>}, 
      // {path:"categoryproducts/:id", element:<ProtectedRoute><CategoryProducts/></ProtectedRoute>}, 

      // {path:"products", element:<ProtectedRoute> <Products/></ProtectedRoute> },
      // {path:"product-details/:id", element:<ProtectedRoute> <ProductDetails/></ProtectedRoute> },
      {path:"E-Commerce" , element:<ProtectedRoute> <Home/></ProtectedRoute> },
      {path:"*", element:<ProtectedRoute><NotFound/></ProtectedRoute>},
    ]}
  ])

  return (
    <>
      <RouterProvider  router={routes}></RouterProvider>
    </>
  )
}

export default App
