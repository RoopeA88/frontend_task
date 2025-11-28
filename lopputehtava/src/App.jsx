import { useState, useEffect, use } from 'react'
import HeaderComponent from './HeaderComponent.jsx'
import './App.css'
import MainBody from './MainBody.jsx'
import { useAppStore } from './useAppStore.jsx'
import ShowNote from './ShowNote.jsx'

function App() {
  

  
  

  
  

  const fetchInitialData = useAppStore(state => state.fetchInitialData);
  
  
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);





    
  return (
    
      <div>
        <HeaderComponent />
        <MainBody/>
        <ShowNote/>
      </div>
  )
}

export default App
