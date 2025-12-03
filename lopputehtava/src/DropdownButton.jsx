import {useState, useEffect} from "react";
import { useAppStore } from "./useAppStore.jsx";
function DropdownButton() {
    
    const selectedCourse = useAppStore(state => state.selectedCourse);
    const handleCourseChange = useAppStore(state => state.handleCourseChange);
    const courses = useAppStore(state => state.courses);
    const disableCreateNoteButton = useAppStore(state => state.disableCreateNoteButton);
    if (disableCreateNoteButton) {
        return null;
    }
    return(
        
            

            
            <div id="dropDownDiv">
                <label>Valitse kurssi: </label>
                <select 
                    id="kurssiDropdown"
                    value = {selectedCourse}
                    
                    onChange={(e) => handleCourseChange(e.target.value)}
                    
                    
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