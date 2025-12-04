
import { useAppStore } from "./useAppStore.jsx";

function StartSessionButton() {
    const startSessionFunction = useAppStore(state => state.startSessionFunction);
    return (
        <div id="startSessionDiv">
            <button id="startSessionButton" onClick={startSessionFunction}>Start Session</button>
            
        </div>
    )
}

export default StartSessionButton;