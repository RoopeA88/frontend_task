import {useState} from "react"
import AddNoteButton from "./AddNoteButton.jsx";
import { useAppStore } from "./useAppStore.jsx";
import SaveNoteButton from "./SaveNoteButton.jsx";
function MainBody() {
    const noteText = useAppStore(state => state.noteText);

    const showNoteInput = useAppStore(state => state.showNoteInput);
    const selectedCourse = useAppStore(state => state.selectedCourse);
    const setNoteText = useAppStore(state => state.setNoteText);
    const sessionActive = useAppStore(state => state.sessionActive);
    return(
        <div className="mainbody">
            {showNoteInput && selectedCourse !== -1 && sessionActive && (
                <div>
                    <h2>Lisää muistiinpano kurssille ID: {selectedCourse}</h2>
                    <textarea placeholder="Kirjoita muistiinpano tähän."  value = {noteText} onChange={(e) => setNoteText(e.target.value)}></textarea>
                    <div id="bothButtonsDiv">
                    <AddNoteButton
                    noteText = {noteText}/>
                    <SaveNoteButton/>
                    </div>
                </div>
                
            )}
            
        </div>
    )
}

export default MainBody;