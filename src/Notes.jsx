import Note from "./Note";
import { toggleImportanceOf } from "./reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  //   const toggleImportance = (id) => {
  //     dispatch(toggleImportanceOf(id));
  //   };

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  );
};

export default Notes;
