import { useState, useEffect } from 'react'
import HeaderComponent from './HeaderComponent.jsx'
import './App.css'
import MainBody from './MainBody.jsx'

function App() {
  const [selectedCourse, setSelectedCourse] = useState("0");
  const [showNoteInput, setShowNoteInput] = useState(false);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
        const getCourses = async () => {
            const response = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses");
            const data = await response.json();
            console.log("moi")
            setCourses(data);
        };

        getCourses();
        
    }, []);

  const handleCourseChange = (courseId) => {
      
      setSelectedCourse(courseId);
      
      
      setShowNoteInput(false); 
  };
  return (
    
      <div>
        <HeaderComponent
        selectedCourse={selectedCourse}
        courses={courses}
        setCourses={setCourses}
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
