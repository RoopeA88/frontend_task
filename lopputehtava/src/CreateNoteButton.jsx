
import { useAppStore } from "./useAppStore.jsx";

function CreateNoteButton(){
    const setShowNoteInput = useAppStore(state => state.setShowNoteInput);
    const selectedCourse = useAppStore(state => state.selectedCourse);
    const setNoteGotSaved = useAppStore (state => state.setNoteGotSaved);
    const handleClick = () => {
        if(selectedCourse !== -1){
            setShowNoteInput(true);
            setNoteGotSaved(false);
        } else {
            alert("Valitse ensin kurssi... hölömö");
        }
        
    };
    
    return(
        <div id="CreateNoteDiv">
        <button id="CreateNoteButton" onClick={handleClick}>Create Note</button>
        </div>
    )
}

export default CreateNoteButton;