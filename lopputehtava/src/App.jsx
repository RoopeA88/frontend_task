import { useState } from 'react'
import HeaderComponent from './HeaderComponent.jsx'
import './App.css'
import MainBody from './MainBody.jsx'

function App() {
  const [selectedCourse, setSelectedCourse] = useState("0");
  const [showNoteInput, setShowNoteInput] = useState(false);

  const handleCourseChange = (courseId) => {
      
      setSelectedCourse(courseId);
      
      
      setShowNoteInput(false); 
  };
  return (
    
      <div>
        <HeaderComponent
        selectedCourse={selectedCourse}
        
        setShowNoteInput={setShowNoteInput}
        setSelectedCourse={handleCourseChange} />
        <MainBody
        selectedCourse={selectedCourse}
        showNoteInput={showNoteInput}
        />
      </div>
  )
}

export default App
