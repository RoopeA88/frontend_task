import { useAppStore } from "./useAppStore.jsx";
function RemoveCourse(){

    const removeCourse = useAppStore(state => state.removeCourse);
    const selectedCourse = useAppStore (state => state.selectedCourse);

    const handleClick = () => {
        if(selectedCourse !== -1){
            removeCourse(selectedCourse);
        } else{
            alert("Valitse ensin poistettava kurssi. Keskity.");
        }
    }
    return(
        <div id="removeCourseDiv">
            <button id="removeCourseButton" onClick={handleClick} >Poista kurssi</button>
        </div>
    )
}

export default RemoveCourse