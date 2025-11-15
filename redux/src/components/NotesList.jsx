import { useSelector, useDispatch } from "react-redux";
import { deleteNote, editNote } from "../store/notesSlice";
import { useState } from "react";

export default function NotesList() {
  const notes = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();

  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleDelete = (index) => {
    dispatch(deleteNote(index));
  };

  const handleEditClick = (index, value) => {
    setEditingIndex(index);
    setEditText(value);
  };

  const handleSaveEdit = (index) => {
    dispatch(editNote({ index, newValue: editText }));
    setEditingIndex(null);
    setEditText("");
  };

  return (
    <div>
      <p>Notes</p>
      <ul className="list-group">
        {notes.map((note, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">

            {/* Jika sedang diedit */}
            {editingIndex === i ? (
              <>
                <input 
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="btn btn-success btn-sm" onClick={() => handleSaveEdit(i)}>
                  Save
                </button>
              </>
            ) : (
              <>
                {note}
                <div>
                  <button 
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEditClick(i, note)}
                  >
                    Edit
                  </button>

                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}