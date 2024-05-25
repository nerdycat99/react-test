import { useEffect } from 'react'

export default function Contacts() {
  useEffect(() => {
    window.location.replace('https://www.glassroom.com.au')
  }, [])
}