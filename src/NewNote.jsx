import { useDispatch } from "react-redux";
import { createNote } from "./reducers/noteReducer";
import noteService from "./services/notes";

const NewNote = () => {
  const dispatch = useDispatch();

  //////////////// Only update the store ////////////////
  // const addNote = (event) => {
  //   event.preventDefault();
  //   const content = event.target.note.value;
  //   event.target.note.value = "";

  //   dispatch(createNote(content));
  // };

  /////////////// Update the server and the store ///////////////
  // const addNote = async (event) => {
  //   event.preventDefault();
  //   const content = event.target.note.value;
  //   event.target.note.value = "";

  //   const newNote = await noteService.createNote(content);
  //   dispatch(createNote(newNote));
  // };

  /////////////// Update the server and the store with thunk ///////////////
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";

    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewNote;
