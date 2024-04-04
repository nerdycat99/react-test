import { useEffect } from 'react'
import Navbar from '../components/NavBar.jsx';
import Carousel from '../components/Carousel.jsx';
import {Helmet} from "react-helmet";

export default function HomePage() {
  useEffect(() => {
    setTimeout(() => {
      document.location.href = 'https://www.glassroom.com.au';
    }, 20000)
  }, [])
  return(
    <>
      <Helmet>
        <html lang="en" />
        <title>Australian Glass Art and Gifts</title>
        <meta name="description" content="Australian Glass Art and Gifts, unique and stunning hand made glass art produced by Australian and New Zealand glass artists for sale" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.australian-glass.com.au" />
        <meta
          property="og:title"
          content="Australian Glass Art and Gifts"
        />
        <meta
          property="og:description"
          content="Australian Glass Art and Gifts, unique and stunning hand made glass art produced by Australian and New Zealand glass artists for sale"
        />
        <meta
          property="og:image"
          content="../assets/various-glass-art-works.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="../assets/various-glass-art-works.jpg" />
        <meta
          name="twitter:title"
          content="Australian Glass Art and Gifts"
        />
        {/* <meta name="twitter:creator" content="@diepsteph" />
        <meta name="twitter:site" content="@diepsteph" /> */}
        <meta
          name="twitter:description"
          content="Australian Glass Art and Gifts, unique and stunning hand made glass art produced by Australian and New Zealand glass artists for sale"
        />
      </Helmet>
      <Navbar />
      <main>
        <div className='Carousel'><Carousel /></div>
      </main>
    </>
  )
}
