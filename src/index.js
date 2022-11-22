import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/header';
import MenuPage from './components/MenuPage/menuPage';
import UsPage from './components/UsPage/usPage';
import ContactPage from './components/ContactPage/contactPage'
import ExtraPage from './components/ExtraPage/extraPage'
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<p>no existe esta ruta</p>
  },
  {
    path: "/Menu",
    element: <MenuPage/>,
    errorElement:<p>no existe esta ruta</p>
  },
  {
    path: "/Nosotros",
    element: <UsPage/>,
    errorElement:<p>no existe esta ruta</p>
  },
  {
    path: "/Contact",
    element: <ContactPage/>,
    errorElement:<p>no existe esta ruta</p>
  },
  {
    path: "/extra",
    element: <ExtraPage/>,
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
