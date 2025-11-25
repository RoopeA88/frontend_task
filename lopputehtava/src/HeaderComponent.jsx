import CreateNoteButton from "./CreateNoteButton"
import DropdownButton from "./DropdownButton"
import AddCourseButton from "./AddCourseButton"
import RemoveCourse from "./RemoveCourse"
import { useAppStore } from "./useAppStore.jsx";
function HeaderComponent(){

    return(
        <div className="mainheader">
        <div className="headerDiv1"> <h2>Muistio Supreme</h2>
        </div>
        <div className="headerDiv2">
            
            <DropdownButton
            
            />
            <CreateNoteButton/>
            <AddCourseButton/>
            <RemoveCourse/>
        </div>
        </div>
    )

}

export default HeaderComponent