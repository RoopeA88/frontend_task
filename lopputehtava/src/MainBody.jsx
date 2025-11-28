import {useState} from "react"
import AddNoteButton from "./AddNoteButton.jsx";
import { useAppStore } from "./useAppStore.jsx";
function MainBody() {
    const noteText = useAppStore(state => state.noteText);

    const showNoteInput = useAppStore(state => state.showNoteInput);
    const selectedCourse = useAppStore(state => state.selectedCourse);
    const setNoteText = useAppStore(state => state.setNoteText);
    return(
        <div className="mainbody">
            {showNoteInput && selectedCourse !== -1 && (
                <div>
                    <h2>Lisää muistiinpano kurssille ID: {selectedCourse}</h2>
                    <textarea placeholder="Kirjoita muistiinpano tähän."  value = {noteText} onChange={(e) => setNoteText(e.target.value)}></textarea>
                    <AddNoteButton
                    noteText = {noteText}/>
                </div>
                
            )}
            
        </div>
    )
}

export default MainBody;