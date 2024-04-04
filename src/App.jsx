import Header from './components/Header.jsx';
import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx'
import ProductPage from './pages/Products.jsx'
import DesignerPage from './pages/Designers.jsx'
import ContactPage from './pages/Contacts.jsx'
import Navbar from './components/NavBar.jsx';
import Carousel from './components/Carousel.jsx';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductPage /> },
  { path: '/designers', element: <DesignerPage /> },
  { path: '/contact', element: <ContactPage /> }
]);

function App() {
  return ( 
    <RouterProvider router={router}/>
    // <>
    //   <Navbar />
    //   <main>
    //     <div className='Carousel'><Carousel /></div>
    //   </main>
    // </>
  );
}

export default App;
