import {useState, useEffect} from "react";
function DropdownButton({selectedCourse, setSelectedCourse,  courses}) {
    
    
    
    
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