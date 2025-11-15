import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import notesReducer from "./notesSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    notes: notesReducer,
  }
});

export default store