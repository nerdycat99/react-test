import { useEffect } from 'react'
import Navbar from '../components/NavBar.jsx';
import Carousel from '../components/Carousel.jsx';
import {Helmet} from "react-helmet";

export default function HomePage() {
  useEffect(() => {
    document.location.href = 'https://www.glassroom.com.au', true;
  }, [])
  return
}
