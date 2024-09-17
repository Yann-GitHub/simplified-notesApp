import { createSlice, current } from "@reduxjs/toolkit";
import noteService from "../services/notes";

////////////////////// Initial state before using json-server //////////////////////
// const initialState = [
//   {
//     content: "reducer defines how redux store works",
//     important: true,
//     id: 1,
//   },
//   {
//     content: "state of store can contain any data",
//     important: false,
//     id: 2,
//   },
// ];

/////////////////////// Helper function - useless json-server created ids //////////////////////
// const generateId = () => Number((Math.random() * 1000000).toFixed(0));

////////////////////////: Store without redux toolkit //////////////////////
// const noteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEW_NOTE":
//       return [...state, action.payload];
//     case "TOGGLE_IMPORTANCE":
//       const id = action.payload.id;
//       const noteToChange = state.find((n) => n.id === id);
//       const changedNote = {
//         ...noteToChange,
//         important: !noteToChange.important,
//       };
//       return state.map((note) => (note.id !== id ? note : changedNote));
//     default:
//       return state;
//   }
// };

//////////////////// Store with redux toolkit //////////////////////
const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote: (state, action) => {
      // const content = action.payload;
      // state.push({ content, important: false, id: generateId() });
      state.push(action.payload);
    },
    toggleImportanceOf: (state, action) => {
      const id = action.payload;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      // console.log(changedNote);

      // console.log(current(state));
      return state.map((note) => (note.id !== id ? note : changedNote));
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

// Action creators - useless now as they are defined in the noteSlice
// export const createNote = (content) => {
//   return {
//     type: "NEW_NOTE",
//     payload: {
//       content,
//       important: false,
//       id: generateId(),
//     },
//   };
// };

// export const toggleImportanceOf = (id) => {
//   return {
//     type: "TOGGLE_IMPORTANCE",
//     payload: { id },
//   };
// };

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions;

// Thunk - used to fetch notes from the server and set them to the store
export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNote(content);
    dispatch(appendNote(newNote));
  };
};

export const toggleImportance = (id) => {
  return async (dispatch) => {
    const updatedNote = await noteService.toggleImportance(id);
    dispatch(toggleImportanceOf(id));
  };
};

export default noteSlice.reducer;
