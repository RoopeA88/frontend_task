import CreateNoteButton from "./CreateNoteButton"
import DropdownButton from "./DropdownButton"
import AddCourseButton from "./AddCourseButton"
import RemoveCourse from "./RemoveCourse"
function HeaderComponent({selectedCourse, setSelectedCourse, setShowNoteInput, courses}){

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
            <AddCourseButton/>
            <RemoveCourse
            setCourses={setCourses}
            courses={courses}/>
        </div>
        </div>
    )

}

export default HeaderComponent