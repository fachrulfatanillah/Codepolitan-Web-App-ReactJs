import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: []
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.items = state.items.filter((item, index) => index !== action.payload);
    },
    editNote(state, action) {
      const { index, newValue } = action.payload;
      state.items[index] = newValue;
    }
  }
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;