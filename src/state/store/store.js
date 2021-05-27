import { configureStore } from '@reduxjs/toolkit'
import quesSlice from "../slices/QuesSlice";
export default configureStore({
  reducer: {
      quesSlice:quesSlice
  },
})