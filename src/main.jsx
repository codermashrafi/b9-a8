import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Routes/Root';
import Home from './Components/Home/Home';
import BookDetails from './Components/BookDetails/BookDetails';
import Books from './Components/Books/Books';
import Error from './Components/Error/Error';
import PageToRead from './Components/PageToRead/PageToRead';
import ScienceFiction from './Components/ScienceFiction/ScienceFiction ';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error></Error>,
    children : [ 
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/book/:id',
        element : <BookDetails></BookDetails>,
        loader : () => fetch('../books.json'),
      },
      {
        path : '/books',
        element : <Books></Books>,
        loader : () =>  fetch('books.json'),
      },
      {
        path: '/pageToRead',
        element: <PageToRead></PageToRead>
      },    
      {
        path: '/ScienceFiction',
        element: <ScienceFiction></ScienceFiction>
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)