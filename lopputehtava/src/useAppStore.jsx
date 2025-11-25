import {create} from "zustand";

export const useAppStore = create((set, get) => ({

    courses: [{ id: "-1", name:"Valitse kurssi..."}],

    notes: [],

    selectedCourse: "-1",
    showNoteInput: false,

    fetchInitialData: async () => {
        try {
            const courseResponse = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses")
            const noteResponse = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes")

            const apiCourses = await courseResponse.json();
            const apiNotes = await noteResponse.json();

            set(state => ({
                courses: [...state.courses, ...apiCourses],
                notes: [...state.notes, apiNotes]
            }));
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    },
    addCourse: (newCourse) => set(state => ({
        courses: [...state.courses, newCourse]
    })),
    handleCourseChange: (courseId) => set ({
        selectedCourse: courseId,
        showNoteInput: false
    }),

    removeCourse: (idToDelete) => set(state => ({
        courses: state.courses.filter(course => course.id !== idToDelete),
        selectedCourse: -1
    })),

    setShowNoteInput: (value) => set({ showNoteInput: value}),

    addNote: (newNote) => set(state => ({
        notes: [...state.notes, newNote]
    })),
}));