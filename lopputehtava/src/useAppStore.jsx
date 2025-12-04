import {create} from "zustand";

export const useAppStore = create((set, get) => ({

    courses: [{ id: -1, name:"Valitse kurssi..."}],
    coursesForList: [{ id: -1, name:"Kaikki kurssit"}],
    notes: [],
    addedNotes: [],
    noteText: "",
    selectedCourse: -1,
    selectedCourseForList: -1,
    setSelectedCourseForList: (courseId) => set({selectedCourseForList: courseId}),
    setSelectedCourse: (courseId) => set({selectedCourse: courseId}),
    showNoteInput: false,
    noteGotSaved: false,
    isFetching: false,
    listNotesBoolean: true,
    setListNotesBoolean: (value) => set({listNotesBoolean: value}),
    test: true,
    sessionId: null,
    disableCreateNoteButton: false,
    setDisableCreateNoteButton: (value) => set({disableCreateNoteButton: value}),
    sessionActive: false,
    setSessionActive: (value) => set({sessionActive: value}),
    setSessionId: (id) => set({ sessionId: id }),
    sessionIdList: [],
    listNotesDropdownBoolean: false,
    setListNotesDropdownBoolean: (value) => set({listNotesDropdownBoolean: value}),
    fetchInitialData: async () => {
        if (get().isFetching) {
            return;
        }
        if(get().courses.length > 1){
            
            return;
        }

        set({isFetching: true});
        
            try {
                const courseResponse = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses");
                const noteResponse = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");

                const apiCourses = await courseResponse.json();
                const apiNotes = await noteResponse.json();
                
                const finalCourses = [{ id: -1, name:"Valitse kurssi..."}, ...apiCourses];
                const finalCoursesForList = [{ id: -1, name:"Kaikki kurssit"}, ...apiCourses];
                set(state => ({
                    courses: finalCourses,
                    notes: [...state.notes, ...apiNotes],
                    coursesForList: finalCoursesForList,

                    isFetching: false
                }));
            } catch (error) {
                console.error("Failed to fetch data:", error);
                set({ isFetching: false });
            }
        
    },
    addCourse: (newCourse) => set(state => ({
        courses: [...state.courses, newCourse],
        coursesForList: [...state.coursesForList, newCourse],
        
    })),
    handleCourseChange: (courseId) => set ({
        selectedCourse: Number(courseId),
        showNoteInput: false,
        
    }),
    handleCourseChangeForList: (courseId) => set ({
        selectedCourseForList: Number(courseId),
    }),

    startSessionFunction: () => {
        get().disableCreateNoteButton = false;
        get().setSelectedCourse(-1);
        get().setSessionId(Date.now())
        console.log("Session started with ID:", get().sessionId);
        get().setSessionActive(true);
        get().setListNotesBoolean(true);
        get().setNoteText("");
        get().setListNotesDropdownBoolean(false);
        
    }
    ,
    endSessionFunction: () => {
        console.log("Session ended with ID:", get().sessionId);
        get().setSessionActive(false);
        get().setListNotesBoolean(false);
        
    },
    
        


    removeCourse: (idToDelete) => set(state => ({
        courses: state.courses.filter(course => course.id !== idToDelete),
        selectedCourse: -1
    })),

    setShowNoteInput: (value) => set({ showNoteInput: value}),

    setNoteGotSaved: (value) => set({ noteGotSaved: value}),

    setNoteText: (text) => set({ noteText: text}),

    addNote: () => set(state => {
        if(state.noteText.trim() === ""){
            alert("Muistiinpano ei voi olla tyhjä.");
            return {};
        }
        const selectedCourseObj = state.courses.find(course => course.id === state.selectedCourse);
        
            const noteObject = {
                noteId: state.notes.length + 1,
                text: state.noteText,
                course: {id: state.selectedCourse, name: selectedCourseObj?.name || "Unknown Course"},
                timestamp: new Date().toISOString(),
                sessionId: state.sessionId,
            };

            return {
            
            addedNotes: [...state.addedNotes, noteObject],
            noteGotSaved: true,
            
            };
        
    }),
    setListNotesFunction: () => {
        get().setListNotesDropdownBoolean(true)
    },
    
}));