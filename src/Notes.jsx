import Note from "./Note";
import { toggleImportance } from "./reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";
import noteService from "./services/notes";

const Notes = () => {
  const dispatch = useDispatch();

  const notes = useSelector(({ filter, notes }) => {
    if (filter === "ALL") {
      return notes;
    }
    return filter === "IMPORTANT"
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important);
  });

  ////////////// Update the server and the store //////////////
  // const toggleImportance = async (id) => {
  //   const updateNote = await noteService.toggleImportance(id);
  //   // console.log(updateNote);
  //   dispatch(toggleImportanceOf(id));
  // };

  ////////////// Update the server and the store with thunk //////////////
  const handleToggleImportance = async (id) => {
    dispatch(toggleImportance(id));
  };

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => handleToggleImportance(note.id)}
        />
      ))}
    </ul>
  );
};

export default Notes;
