import Navbar from '../components/NavBar.jsx';
import Carousel from '../components/Carousel.jsx';

export default function HomePage() {
  return(
    <>
      <Navbar />
      <main>
        <div className='Carousel'><Carousel /></div>
      </main>
    </>
  )
}