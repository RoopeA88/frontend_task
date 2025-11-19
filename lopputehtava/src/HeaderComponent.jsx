import CreateNoteButton from "./CreateNoteButton"
import DropdownButton from "./DropdownButton"
function HeaderComponent({selectedCourse, setSelectedCourse, setShowNoteInput}){

    return(
        <div className="mainheader">
        <div className="headerDiv1">
        </div>
        <div className="headerDiv2">
            
            <DropdownButton
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            />
            <CreateNoteButton
            setShowNoteInput={setShowNoteInput}
            selectedCourse={selectedCourse}/>
        </div>
        </div>
    )

}

export default HeaderComponent