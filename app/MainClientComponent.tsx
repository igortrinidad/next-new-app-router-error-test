'use client';
 
import { useEffect } from 'react';
import { useGeneralStore } from '@/stores'

export default function MainClientComponent() {
  
  
  const toggleDarkMode = useGeneralStore((state: any) => state.toggleDarkMode)
  
  
  useEffect(() => {
    const eventListenerAltArrowDown = (e: any) => {
      if(e.altKey && e.key === 'ArrowUp') {
        toggleDarkMode()
      }
    }
    
    document.addEventListener('keydown', eventListenerAltArrowDown)

    return () => {
      document.removeEventListener('keydown', eventListenerAltArrowDown)
    }

  }, [])

 
  return (<></>);
}