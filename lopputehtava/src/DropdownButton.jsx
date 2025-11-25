import {useState, useEffect} from "react";
function DropdownButton() {
    
    const selectedCourse = useAppStore(state => state.selectedCourse);
    const setSelectedCourse = useAppStore(state => state.handleCourseChange);
    const courses = useAppStore(state => state.courses)
    
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