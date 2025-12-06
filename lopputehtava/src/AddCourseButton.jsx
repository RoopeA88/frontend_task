import { useState } from "react"
import { useAppStore } from "./useAppStore.jsx";
function AddCourseButton(){
    const [courseName, setCourseName] = useState("")
    
    const addCourseAction = useAppStore(state => state.addCourse)
    const addCourse = () => {

        if (courseName.trim() === "") {
        
        alert("Kurssin nimi ei voi olla tyhjä.");
        return;
    }
        const newCourse = {
            name: courseName.trim(),
            id:Date.now()
        }

        

        addCourseAction(newCourse)

        setCourseName("");
        alert(`Kurssi ${newCourse.name} lisätty ID:llä ${newCourse.id}`)
    }
    return(
        <div id="courseDiv">
            <form>
                
                <input type="text" placeholder="kurssin nimi"  value={courseName} onChange={(e) => setCourseName(e.target.value)}></input>
            </form>
            <button id="AddCourseButton" onClick={addCourse}>Lisää kurssi</button>
        </div>
    )
}

export default AddCourseButton