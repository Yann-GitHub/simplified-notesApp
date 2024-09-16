import Note from "./Note";
import { toggleImportanceOf } from "./reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";
import noteService from "./services/notes";

const Notes = () => {
  const dispatch = useDispatch();
  //   const notes = useSelector((state) => state.notes);

  const notes = useSelector(({ filter, notes }) => {
    if (filter === "ALL") {
      return notes;
    }
    return filter === "IMPORTANT"
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important);
  });

  const toggleImportance = async (id) => {
    const updateNote = await noteService.toggleImportance(id);
    // console.log(updateNote);
    dispatch(toggleImportanceOf(id));
  };

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => toggleImportance(note.id)}
        />
      ))}
    </ul>
  );
};

export default Notes;
