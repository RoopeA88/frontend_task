import { useAppStore } from "./useAppStore";

function SaveNoteButton() {
    const endSessionFunction = useAppStore(state => state.endSessionFunction);
    return (
        <button id="saveNoteButton" onClick={endSessionFunction}>Save Note</button>
    );
}

export default SaveNoteButton;