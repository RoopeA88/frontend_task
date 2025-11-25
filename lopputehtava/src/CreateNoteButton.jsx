
import { useAppStore } from "./useAppStore.jsx";

function CreateNoteButton(){
    const setShowNoteInput = useAppStore(state => state.setShowNoteInput);
    const selectedCourse = useAppStore(state => state.handleCourseChange);

    const handleClick = () => {
        if(selectedCourse !== "-1"){
            setShowNoteInput(true);
        } else {
            alert("Jotain outoa tapahtui.");
        }
        
    };
    
    return(
        <div id="CreateNoteDiv">
        <button id="CreateNoteButton" onClick={handleClick}>Create Note</button>
        </div>
    )
}

export default CreateNoteButton;