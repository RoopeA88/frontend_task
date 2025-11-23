import { useState } from "react"

function AddCourseButton({setCourses, courses}){
    const [courseName, setCourseName] = useState("")

    const addCourse = () => {

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
                <label>Kurssin nimi: </label>
                <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)}></input>
            </form>
            <button id="AddCourseButton" onClick={addCourse}>Lisää kurssi</button>
        </div>
    )
}

export default AddCourseButton