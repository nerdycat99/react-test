import { useEffect } from 'react'
import Navbar from '../components/NavBar.jsx';
import Artists from '../components/Artists.jsx';
import {Helmet} from "react-helmet";

export default function DesignerPage() {
  useEffect(() => {
    document.location.href = 'https://www.glassroom.com.au', true;
  }, [])
  return
}
