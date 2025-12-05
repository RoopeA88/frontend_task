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
    const filteredNotesForList = notes.filter(note => note.course.id === selectedCourseForList);
    const filteredNotesForListAdded = addedNotes.filter(note => note.course.id === selectedCourseForList);
    const deleteNoteFunction = useAppStore(state => state.deleteNoteFunction);
    const deleteAddedNoteFunction = useAppStore(state => state.deleteAddedNoteFunction);
    const deleteHardcodedNoteFunction = useAppStore(state => state.deleteHardcodedNoteFunction);
    const fixBugBoolean = useAppStore(state => state.fixBugBoolean);
    if(listNotesDropdownBoolean){
        if(selectedCourseForList === -1){
            return (
                <div className="showNoteDiv">
                    {notes.map((note, index) =>(
                        <div className="noteDivMother" >
                            <button className="deleteButton" onClick={() => deleteHardcodedNoteFunction(note.id)}>X</button>
                            <div  className="noteDivCanDelete" key={note.id}>
                                <h3>Muistiinpano kurssile ID: {note.course.id} | {note.timestamp} | {note.course.name}</h3>
                                <p>{note.text}</p>
                            </div>
                        </div>  
                    ))}


                    {addedNotes.map((note, index) =>(
                        <div className="noteDivMother" >
                            <button className="deleteButton" onClick={() => deleteAddedNoteFunction(note.noteId)}>X</button>
                            <div  className="noteDivCanDelete" key={note.id}>
                                <h3>Muistiinpano kurssile ID: {note.course.id} | {note.timestamp} | {note.course.name}</h3>
                                <p>{note.text}</p>
                            </div>
                        </div>  
                    ))}

                </div>
            ) 

            } else{
                return (
                    <div className="showNoteDiv">
                        {filteredNotesForList.map((note, index) =>(
                            <div className="noteDivMother" >
                                <button className="deleteButton" onClick={() => deleteNoteFunction(note.noteId)}>X</button>
                                <div  className="noteDivCanDelete" key={note.id}>
                                    <h3>Muistiinpano kurssile ID: {note.course.id} | {note.timestamp} | {note.course.name}</h3>
                                    <p>{note.text}</p>
                                </div>
                            </div>  
                        ))}

                        {filteredNotesForListAdded.map((note, index) =>(
                            <div className="noteDivMother" >
                                <button className="deleteButton" onClick={() => deleteAddedNoteFunction(note.noteId)}>X</button>
                                <div  className="noteDivCanDelete" key={note.id}>
                                    <h3>Muistiinpano kurssile ID: {note.course.id} | {note.timestamp} | {note.course.name}  </h3>
                                    <p>{note.text}</p>
                                </div>
                            </div>  
                        ))}
                    </div>
                )
        }   

    }


    

    return (
        <div className="showNoteDiv">
            {noteGotSaved && sessionActive && listNotesBoolean && listNotesDropdownBoolean == false  && filteredNotes.map((note, index) =>(
                
                <div key={note.id} id="noteDivActual">
                    <h3>Muistiinpano kurssile ID: {selectedCourse} | {note.timestamp} | {note.course.name}</h3>
                    <p>{note.text}</p>

                </div>  
            ))}
            {listNotesBoolean === false && fixBugBoolean === false && filteredNotes.map ((note, index) =>(
                
                <div key={note.id} id="noteDivListSession">
                    
                    <p>{note.text}</p>
                
                
                </div>  
            ))}
        </div>   
    );
}

export default ShowNote;