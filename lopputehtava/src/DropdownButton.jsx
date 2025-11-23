import {useState, useEffect} from "react";
function DropdownButton({selectedCourse, setSelectedCourse}) {
    
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
    return(
        
            

            
            <div id="dropDownDiv">
                <label>Valitse kurssi: </label>
                <select 
                    id="kurssiDropdown"
                    value = {selectedCourse}
                    
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    
                    
                >
                
                    {courses.map(course => (
                    <option key={course.id} value={course.id}>
                    {course.name}
                </option>
            ))}
                </select>
            </div>
        
        
    );
}
export default DropdownButton;