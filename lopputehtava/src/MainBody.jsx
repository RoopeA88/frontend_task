function MainBody({selectedCourse, showNoteInput}) {
    return(
        <div className="mainbody">
            {showNoteInput && selectedCourse && (
                <div>
                    <h2>Lisää muistiinpano kurssille ID: {selectedCourse}</h2>
                    <textarea placeholder="Kirjoita muistiinpano tähän."></textarea>
                </div>
            )}
        </div>
    )
}

export default MainBody;