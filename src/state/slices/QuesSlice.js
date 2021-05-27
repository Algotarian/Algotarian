import { createSlice } from '@reduxjs/toolkit';

export const quesSlice = createSlice({
    name: 'Question',
    initialState: {
      QuesList:[],
      QuesType:"",
      
    },
    reducers: {
      showQues:(state)=>{
         console.log(state);
      },
      setQues:(state,action)=>{
          state.QuesList=action.payload;
      },
      addQues:(state,action)=>{
          state.QuesList.push(action.payload);

      },
      changeType:(state,action)=>{
          state.QuesType=action.payload;
      }
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { showQues, addQues, changeType } = quesSlice.actions;
  
  export default quesSlice.reducer;