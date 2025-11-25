import {useState} from "react"
import SaveNoteButton from "./SaveNoteButton";

function MainBody({selectedCourse, showNoteInput, notes, setNotes}) {
    const [noteText, setNoteText] = useState("");

    
    return(
        <div className="mainbody">
            {showNoteInput && selectedCourse && (
                <div>
                    <h2>Lisää muistiinpano kurssille ID: {selectedCourse}</h2>
                    <textarea placeholder="Kirjoita muistiinpano tähän." ></textarea>
                </div>
            )}
            
        </div>
    )
}

export default MainBody;