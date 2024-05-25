import { useEffect } from 'react'
import Navbar from '../components/NavBar.jsx';
import Redirect from '../components/Redirect.jsx';
import {Helmet} from "react-helmet";

export default function ProductPage() {
  useEffect(() => {
    document.location.href = 'https://www.glassroom.com.au', true;
  }, [])
  return(
    <>
      <Helmet>
        <html lang="en" />
        <title>Australian Glass Art Products</title>
        <meta name="description" content="Australian Glass Art and Gifts, unique and stunning hand made glass art products produced by Australian and New Zealand glass artists available to buy" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.australian-glass.com.au/products" />
        <meta
          property="og:title"
          content="Australian Glass Art Products"
        />
        <meta
          property="og:description"
          content="Australian Glass Art and Gifts, unique and stunning hand made glass art products produced by Australian and New Zealand glass artists available to buy"
        />
        <meta
          property="og:image"
          content="../assets/various-glass-art-works.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="../assets/various-glass-art-works.jpg" />
        <meta
          name="twitter:title"
          content="Australian Glass Art Products"
        />
        {/* <meta name="twitter:creator" content="@diepsteph" />
        <meta name="twitter:site" content="@diepsteph" /> */}
        <meta
          name="twitter:description"
          content="Australian Glass Art and Gifts, unique and stunning hand made glass art products produced by Australian and New Zealand glass artists available to buy"
        />
      </Helmet>
      <Navbar />
      <Redirect />
    </>
  )
}