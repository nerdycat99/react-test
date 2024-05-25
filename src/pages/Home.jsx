import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    window.location.replace('https://www.glassroom.com.au')
  }, [])
}
