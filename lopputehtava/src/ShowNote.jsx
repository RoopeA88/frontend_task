import { useAppStore } from "./useAppStore.jsx";

function ShowNote() {
    const noteGotSaved = useAppStore(state => state.noteGotSaved);
    
    const selectedCourse = useAppStore(state => state.selectedCourse);
    const sessionActive = useAppStore(state => state.sessionActive);
    const addedNotes = useAppStore(state => state.addedNotes);
    const sessionId = useAppStore(state => state.sessionId);
    const filteredNotes = addedNotes.filter(note => note.course.id === selectedCourse && note.sessionId === sessionId);
    
    return (
        <div id="showNoteDiv">
            {noteGotSaved && sessionActive &&  filteredNotes.map((note, index) =>(
                
                <div key={note.noteId} id="noteDivActual">
                    <h3>Muistiinpano kurssile ID: {selectedCourse} | {note.timestamp} | {note.course.name}</h3>
                    <p>{note.text}</p>

                </div>  
            ))}
        </div>   
    );
}

export default ShowNote;