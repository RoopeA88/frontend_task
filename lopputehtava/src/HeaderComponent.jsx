import CreateNoteButton from "./CreateNoteButton"
import DropdownButton from "./DropdownButton"
import AddCourseButton from "./AddCourseButton"
function HeaderComponent({selectedCourse, setSelectedCourse, setShowNoteInput, courses, setCourses}){

    return(
        <div className="mainheader">
        <div className="headerDiv1"> <h2>Muistio Supreme</h2>
        </div>
        <div className="headerDiv2">
            
            <DropdownButton
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            
            courses={courses}
            />
            <CreateNoteButton
            setShowNoteInput={setShowNoteInput}
            selectedCourse={selectedCourse}/>
            <AddCourseButton
            setCourses = {setCourses}
            courses = {courses}/>
        </div>
        </div>
    )

}

export default HeaderComponent