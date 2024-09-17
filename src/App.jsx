import { useEffect } from "react";
import NewNote from "./NewNote";
import Notes from "./Notes";
import VisibilityFilter from "./VisibilityFilter";
// import noteService from "./services/notes";
import { useDispatch } from "react-redux";
// import { setNotes } from "./reducers/noteReducer";
import { initializeNotes } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();

  // Before using thunk
  // useEffect(() => {
  //   noteService.getAll().then((notes) => dispatch(setNotes(notes)));
  // }, []);

  // With thunk - Update the server and the store
  useEffect(() => {
    dispatch(initializeNotes());
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
