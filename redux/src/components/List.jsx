import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../store/todosSlice";

export default function List() {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  function deleteHandler (index) {
    dispatch(deleteTodo(index));
  }

  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i} className="list-group-item">
            {todo}
            <button 
                className="btn btn-danger float-right"
                onClick={() => deleteHandler(i)}
            >
                Delete
            </button>
        </li>
      ))}
    </ul>
  );
}