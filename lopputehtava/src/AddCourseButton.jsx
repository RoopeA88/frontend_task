import { useState } from "react"

function AddCourseButton({setCourses, courses}){
    const [courseName, setCourseName] = useState("")

    const addCourse = () => {

        if (courseName.trim() === "") {
        
        alert("Kurssin nimi ei voi olla tyhjä.");
        return;
    }
        const newCourse = {
            name: courseName.trim(),
            id:Date.now()
        }

        

        setCourses([...courses, newCourse]);

        setCourseName("");
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