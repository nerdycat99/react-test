import { useEffect } from 'react'
import Navbar from '../components/NavBar.jsx';
import Redirect from '../components/Redirect.jsx';
import {Helmet} from "react-helmet";

export default function ProductPage() {
  useEffect(() => {
    document.location.href = 'https://www.glassroom.com.au', true;
  }, [])
  return
}