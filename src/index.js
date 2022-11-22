import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/header';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<p>no existe esta ruta</p>
  },
]);
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
