import { useAppStore } from "./useAppStore.jsx";

function ShowNote() {
    const noteGotSaved = useAppStore(state => state.noteGotSaved);
    
    const selectedCourse = useAppStore(state => state.selectedCourse);
    const sessionActive = useAppStore(state => state.sessionActive);
    const addedNotes = useAppStore(state => state.addedNotes);
    const sessionId = useAppStore(state => state.sessionId);
    const listNotesBoolean = useAppStore(state => state.listNotesBoolean);
    const filteredNotes = addedNotes.filter(note => note.course.id === selectedCourse && note.sessionId === sessionId);
    const noteText = useAppStore(state => state.noteText);
    const showNotesBoolean = useAppStore(state => state.showNotesBoolean);
    const notes = useAppStore(state => state.notes);
    const selectedCourseForList = useAppStore(state => state.selectedCourseForList);
    const listNotesDropdownBoolean = useAppStore(state => state.listNotesDropdownBoolean);
    if(listNotesDropdownBoolean){
        if(selectedCourseForList === -1){
            return (
                <div id="showNoteDiv">
                    {notes.map((note, index) =>(
                        <div id="noteDivMother">
                            <button id="deleteButton">X</button>
                            <div key={note.noteId} id="noteDivCanDelete">
                                <h3>Muistiinpano kurssile ID: {note.course.id} | {note.timestamp} | {note.course.name}</h3>
                                <p>{note.text}</p>
                            </div>
                        </div>  
                    ))}
                </div>
            )
        }
        return (
            <div id="showNoteDiv">

            </div>
        )
    }

    return (
        <div id="showNoteDiv">
            {noteGotSaved && sessionActive && listNotesBoolean && listNotesDropdownBoolean == false  && filteredNotes.map((note, index) =>(
                
                <div key={note.noteId} id="noteDivActual">
                    <h3>Muistiinpano kurssile ID: {selectedCourse} | {note.timestamp} | {note.course.name}</h3>
                    <p>{note.text}</p>

                </div>  
            ))}
            {listNotesBoolean === false && filteredNotes.map ((note, index) =>(
                
                <div key={note.noteId} id="noteDivListSession">
                    
                    <p>{note.text}</p>
                
                
                </div>  
            ))}
        </div>   
    );
}

export default ShowNote;