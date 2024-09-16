import { useEffect } from "react";
import NewNote from "./NewNote";
import Notes from "./Notes";
import VisibilityFilter from "./VisibilityFilter";
import noteService from "./services/notes";
import { useDispatch } from "react-redux";
import { setNotes } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)));
  }, []);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
