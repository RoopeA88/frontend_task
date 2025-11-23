function CreateNoteButton({setShowNoteInput, selectedCourse}){

    const handleClick = () => {
        if(selectedCourse){
            setShowNoteInput(true);
        } else {
            alert("Jotain outoa tapahtui.");
        }
        
    };
    
    return(
        <div id="CreateNoteDiv">
        <button id="CreateNoteButton" onClick={handleClick}>Create Note</button>
        </div>
    )
}

export default CreateNoteButton;