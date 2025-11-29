import { useAppStore } from "./useAppStore.jsx";

function ShowNote() {
    const noteGotSaved = useAppStore(state => state.noteGotSaved);
    
    const selectedCourse = useAppStore(state => state.selectedCourse);
    
    const addedNotes = useAppStore(state => state.addedNotes);
    const filteredNotes = addedNotes.filter(note => note.course.id === selectedCourse);
    
    return (
        <div id="showNoteDiv">
            {noteGotSaved &&  filteredNotes.map((note, index) =>(
                <div key={note.noteId} id="noteDivActual">
                    <h3>Muistiinpano kurssile ID: {selectedCourse} Timestamp: {note.timestamp} Kurssin nimi: {note.course.name}</h3>
                    <p>{note.text}</p>

                </div>  
            ))}
        </div>   
    );
}

export default ShowNote;