


function SaveNoteButton({notes, saveNote}){

    
    return(
        <div id="SaveNoteDiv">
            <button id="SaveNoteButton" onClick={saveNote}>Save Note</button>
        </div>
    )
}

export default SaveNoteButton