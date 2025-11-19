import { useState } from 'react'
import HeaderComponent from './HeaderComponent.jsx'
import './App.css'
import MainBody from './MainBody.jsx'

function App() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [showNoteInput, setShowNoteInput] = useState(false);

  return (
    
      <div>
        <HeaderComponent
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        setShowNoteInput={setShowNoteInput} />
        <MainBody
        selectedCourse={selectedCourse}
        showNoteInput={showNoteInput}
        />
      </div>
  )
}

export default App
