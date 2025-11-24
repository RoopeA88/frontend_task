import {useState} from "react"
import SaveNoteButton from "./SaveNoteButton";

function MainBody({selectedCourse, showNoteInput, notes, setNotes}) {
    const [noteText, setNoteText] = useState("");

    const saveNote = () => {
        if(selectedCourse == "-1"){
            alert("Valitse ensin kurssi.");
            return;
        }

        if(noteText.trim() === ""){
            alert("Muistiinpano ei voi olla tyhjä.");
            return;
        }

        const newNote = {
            id: Date.now().toString(),
            courseId: selectedCourse,
            text: noteText,
            date: new Date().toLocaleDateString("fi-FI")        
        };
    

    setNotes([...notes, newNote]);
    setNoteText("");
    };
    return(
        <div className="mainbody">
            {showNoteInput && selectedCourse && (
                <div>
                    <h2>Lisää muistiinpano kurssille ID: {selectedCourse}</h2>
                    <textarea placeholder="Kirjoita muistiinpano tähän." value={noteText} onChange={(e) => setNoteText(e.target.value)}></textarea>
                </div>
            )}
            <SaveNoteButton
            saveNote = {saveNote}/>
        </div>
    )
}

export default MainBody;