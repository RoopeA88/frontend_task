import {create} from "zustand";

export const useAppStore = create((set, get) => ({

    courses: [{ id: -1, name:"Valitse kurssi..."}],
    
    notes: [],
    addedNotes: [],
    noteText: "",
    selectedCourse: -1,
    showNoteInput: false,
    noteGotSaved: false,
    isFetching: false,
    test: true,
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
                set(state => ({
                    courses: finalCourses,
                    notes: [...state.notes, ...apiNotes],

                    isFetching: false
                }));
            } catch (error) {
                console.error("Failed to fetch data:", error);
                set({ isFetching: false });
            }
        
    },
    addCourse: (newCourse) => set(state => ({
        courses: [...state.courses, newCourse],
        
    })),
    handleCourseChange: (courseId) => set ({
        selectedCourse: Number(courseId),
        showNoteInput: false
    }),

    
        


    removeCourse: (idToDelete) => set(state => ({
        courses: state.courses.filter(course => course.id !== idToDelete),
        selectedCourse: -1
    })),

    setShowNoteInput: (value) => set({ showNoteInput: value}),

    setNoteGotSaved: (value) => set({ noteGotSaved: value}),

    setNoteText: (text) => set({ noteText: text}),

    addNote: () => set(state => ({
        
        
            addedNotes: [...state.addedNotes, state.noteText],
            noteGotSaved: true,
        
        
    })),
}));