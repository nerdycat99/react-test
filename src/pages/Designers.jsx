import { useEffect } from 'react'
import Navbar from '../components/NavBar.jsx';
import Artists from '../components/Artists.jsx';
import {Helmet} from "react-helmet";

export default function DesignerPage() {
  useEffect(() => {
    document.location.href = 'https://www.glassroom.com.au', true;
  }, [])
  return(
    <>
      <Helmet>
        <html lang="en" />
        <title>Artists and Designers available at Australian Glass Art and Gifts</title>
        <meta name="description" content="Renowned international glass artists and designers whose glass art work is available at Australian Glass Art and Gifts" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.australian-glass.com.au/designers" />
        <meta
          property="og:title"
          content="Artists and Designers available at Australian Glass Art and Gifts"
        />
        <meta
          property="og:description"
          content="Renowned international glass artists and designers whose glass art work is available at Australian Glass Art and Gifts"
        />
        <meta
          property="og:image"
          content="../assets/ruth-allen-and-ben-edols-in-glass-workshop.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="../assets/ruth-allen-and-ben-edols-in-glass-workshop.jpg" />
        <meta
          name="twitter:title"
          content="Artists and Designers available at Australian Glass Art and Gifts"
        />
        <meta
          name="twitter:description"
          content="Renowned international glass artists and designers whose glass art work is available at Australian Glass Art and Gifts"
        />
      </Helmet>
      <Navbar />
      <Artists />
    </>
  )
}
