import { useSelector } from "react-redux";

export default function List() {
  const todos = useSelector((state) => state.todos.items);

  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
}