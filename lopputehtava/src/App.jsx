import { useState, useEffect } from 'react'
import HeaderComponent from './HeaderComponent.jsx'
import './App.css'
import MainBody from './MainBody.jsx'

function App() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [showNoteInput, setShowNoteInput] = useState(false);

  const [courses, setCourses] = useState([{id: "-1", name:"Valitse kurssi..."}]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
        const getCourses = async () => {
            const response = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses");
            const data = await response.json();
            console.log("moi")
            setCourses([...courses,...data]);
        };

        getCourses();
        
    }, []);

    useEffect(() => {
        const getNotes = async () => {
            const response = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");
            const data = await response.json();
            console.log("moi")
            setNotes([...notes,...data]);
        };

        getNotes();
        
    }, []);

    useEffect(() => {
      const jsonNotes = JSON.stringify(notes);
      localStorage.setItem("course_notes", jsonNotes);
    }, [notes]);

    useEffect(() =>{
      const jsonCourses = JSON.stringify(courses);
      localStorage.setItem("courses", jsonCourses);
    }, [courses]);

    useEffect(() => {

    })

  const handleCourseChange = (courseId) => {
      
      setSelectedCourse(courseId);
      
      
      setShowNoteInput(false); 
  };

    const removeCourse = (idToDelete) => {
        
      setCourses(courses =>{
        
        return courses.filter(course => course.id !== idToDelete)
      });
      setSelectedCourse("-1")
    }
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
        notes={notes}
        setNotes={setNotes}
        />
      </div>
  )
}

export default App
