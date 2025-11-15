import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import { addNote } from "../store/notesSlice";

export default function Form() {
  const [text, setText] = useState("");
  const [noteText, setNoteText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText("");
  };

  const handleAddNote = () => {
    if (noteText.trim() === "") return;
    dispatch(addNote(noteText));
    setNoteText("");
  };

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>

      <div>
        <input
          type="text"
          placeholder="Add note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </div>
  );
}
