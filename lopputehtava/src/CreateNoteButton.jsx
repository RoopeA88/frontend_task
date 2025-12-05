
import { useAppStore } from "./useAppStore.jsx";

function CreateNoteButton(){
    const setShowNoteInput = useAppStore(state => state.setShowNoteInput);
    const selectedCourse = useAppStore(state => state.selectedCourse);
    const setNoteGotSaved = useAppStore (state => state.setNoteGotSaved);
    const sessionActive = useAppStore(state => state.sessionActive);
    const disableCreateNoteButton = useAppStore(state => state.disableCreateNoteButton);
    const setDisableCreateNoteButton = useAppStore(state => state.setDisableCreateNoteButton);
    const setListNotesDropdownBoolean = useAppStore(state => state.setListNotesDropdownBoolean);
    const handleClick = () => {
        if(selectedCourse !== -1 && sessionActive && disableCreateNoteButton === false){
            setShowNoteInput(true);
            setNoteGotSaved(false);
            
            setListNotesDropdownBoolean(false);
        } else {
            alert("Valitse ensin kurssi ja aloita istunto ennen muistiinpanon luomista.");
        }
        
    };
    
    return(
        <div id="CreateNoteDiv">
        <button id="CreateNoteButton" onClick={handleClick}>Create Note</button>
        </div>
    )
}

export default CreateNoteButton;