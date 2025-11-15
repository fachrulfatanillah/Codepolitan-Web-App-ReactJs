import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";

export default function Form() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
