import { useState, useEffect, use } from 'react'
import HeaderComponent from './HeaderComponent.jsx'
import './App.css'
import MainBody from './MainBody.jsx'
import { useAppStore } from './useAppStore.jsx'

function App() {
  

  
  

  
  const notes = useAppStore(state => state.notes)
  const selectedCourse = useAppStore(state => state.selectedCourse);
  const showNoteInput = useAppStore(state => state.showNoteInput);

  const fetchInitialData = useAppStore(state => state.fetchInitialData);
  const handleCourseChange = useAppStore (state => state.handleCourseChange);
  const setShowNoteInput = useAppStore(state => state.setShowNoteInput);
  
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);





    
  return (
    
      <div>
        <HeaderComponent
        selectedCourse={selectedCourse}
        
        setShowNoteInput={setShowNoteInput}
        
        setSelectedCourse={handleCourseChange} />
        <MainBody
        selectedCourse={selectedCourse}
        showNoteInput={showNoteInput}
        notes={notes}
        courses={courses}
        addNote={addNote}
        />
      </div>
  )
}

export default App
