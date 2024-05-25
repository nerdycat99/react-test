import { useEffect } from 'react'
import Navbar from '../components/NavBar.jsx';
import Redirect from '../components/Redirect.jsx';
import {Helmet} from "react-helmet";

export default function Contacts() {
  useEffect(() => {
    document.location.href = 'https://www.glassroom.com.au', true;
  }, [])
  return(
    <>
      <Helmet>
        <html lang="en" />
        <title>Contact details and opening hours for Australian Glass Art and Gifts</title>
        <meta name="description" content="Contact us at Australian Glass Art & Gifts or visit our store in Library Walk, Military Road, Mosman during our opening hours" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.australian-glass.com.au/designers" />
        <meta
          property="og:title"
          content="Contact details and opening hours for Australian Glass Art and Gifts"
        />
        <meta
          property="og:description"
          content="Contact us at Australian Glass Art & Gifts or visit our store in Library Walk, Military Road, Mosman during our opening hours"
        />
        <meta
          property="og:image"
          content="../assets/australian-glass-art-and-gifts-shop-mosman.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="../assets/australian-glass-art-and-gifts-shop-mosman.jpg" />
        <meta
          name="twitter:title"
          content="Contact details and opening hours for Australian Glass Art and Gifts"
        />
        <meta
          name="twitter:description"
          content="Contact us at Australian Glass Art & Gifts or visit our store in Library Walk, Military Road, Mosman during our opening hours"
        />
      </Helmet>
      <Navbar />
      <Redirect />
    </>
  )
}