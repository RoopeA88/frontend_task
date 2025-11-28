
import { useAppStore } from "./useAppStore.jsx";




function AddNoteButton() {
    const addNote = useAppStore(state => state.addNote);
    
    return(
        <div id="addNoteDiv">
            <button id="addNoteButton" onClick={addNote}>Add note</button>
            
        </div>
    )
}

export default AddNoteButton