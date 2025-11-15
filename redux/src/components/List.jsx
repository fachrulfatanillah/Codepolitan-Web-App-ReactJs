import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/todosSlice";
import { useState } from "react";

export default function List() {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  function deleteHandler (index) {
    dispatch(deleteTodo(index));
  }

  function startEdit(index, currentValue) {
    setEditingIndex(index);
    setEditValue(currentValue);
  }

  function saveEdit(index) {
    dispatch(editTodo({ index, newValue: editValue }));
    setEditingIndex(null);
    setEditValue("");
  }

  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i} className="list-group-item">

          {editingIndex === i ? (
            <>
              <input 
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button 
                className="btn btn-success ml-2"
                onClick={() => saveEdit(i)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              {todo}
              <button 
                className="btn btn-warning float-right ml-2"
                onClick={() => startEdit(i, todo)}
              >
                Edit
              </button>

              <button 
                className="btn btn-danger float-right"
                onClick={() => deleteHandler(i)}
              >
                Delete
              </button>
            </>
          )}

        </li>
      ))}
    </ul>
  );
}