import { useAppStore } from "./useAppStore.jsx";

function ShowNote() {
    const noteGotSaved = useAppStore(state => state.noteGotSaved);
    const notes = useAppStore(state => state.notes);
    const selectedCourse = useAppStore(state => state.selectedCourse);
    const noteText1 = useAppStore(state => state.noteText);
    const addedNotes = useAppStore(state => state.addedNotes);
    
    return (
        <div id="showNoteDiv">
            {noteGotSaved && addedNotes.map((note, index) =>(
                <div key={index}>
                    <h3>Muistiinpano kurssile ID: {selectedCourse}</h3>
                    <p>{note}</p>

                </div>  
            ))}
        </div>   
    );
}

export default ShowNote