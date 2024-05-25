import { useEffect } from 'react'

export default function ProductPage() {
  useEffect(() => {
    window.location.replace('https://www.glassroom.com.au')
  }, [])
}