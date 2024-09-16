import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNote = async (content) => {
  const newObject = { content, important: false };
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const toggleImportance = async (id) => {
  // Get the note
  const noteResponse = await axios.get(`${baseUrl}/${id}`);
  const note = noteResponse.data;

  // Toggle the importance
  const updatedNote = { ...note, important: !note.important };

  // Update the note in the server
  const response = await axios.put(`${baseUrl}/${id}`, updatedNote);
  return response.data;
};

export default { getAll, createNote, toggleImportance };
