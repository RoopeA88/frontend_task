import {useState} from "react"
import SaveNoteButton from "./SaveNoteButton";
import { useAppStore } from "./useAppStore.jsx";
function MainBody() {
    const [noteText, setNoteText] = useState("");

    const showNoteInput = useAppStore(state => state.showNoteInput);
    const selectedCourse = useAppStore(state => state.selectedCourse);
    return(
        <div className="mainbody">
            {showNoteInput && selectedCourse !== "-1" && (
                <div>
                    <h2>Lisää muistiinpano kurssille ID: {selectedCourse}</h2>
                    <textarea placeholder="Kirjoita muistiinpano tähän." ></textarea>
                </div>
            )}
            
        </div>
    )
}

export default MainBody;