import { useAppStore } from "./useAppStore";

function ListNotesButton() {
    const handleCourseChangeForList = useAppStore(state => state.handleCourseChangeForList);
    const setSelectedCourseForList = useAppStore(state => state.setSelectedCourseForList);
    const coursesForList = useAppStore(state => state.coursesForList);
    const setListNotesFunction = useAppStore(state => state.setListNotesFunction);

    
    return (
        <div id="listNotesDiv">
        
        <select id="listNotesDropdown" onChange={(e) => handleCourseChangeForList(e.target.value)}>
            {coursesForList.map(course => ( 
                <option key={course.id} value={course.id} >
                    {course.name}
                </option>
            ))}
        </select>
        <button onClick={setListNotesFunction}>List notes</button>
        </div>
    )
}

export default ListNotesButton;