import { configureStore } from '@reduxjs/toolkit'
import formSlice from './Slices/formSlice'
import toDoSlice from './Slices/ToDoSlice'

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    todo: toDoSlice.reducer,
  }
})
export default store
