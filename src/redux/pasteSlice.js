import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem('pastes')
  ? JSON.parse(localStorage.getItem("pastes")) 
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success('Paste created successfully!');
    },

    updateToPastes: (state,action) => {
      const pastes = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pastes._id);

      if(index >= 0){
        state.pastes[index] = pastes;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated Successfully");
        
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes =[];
      localStorage.removeItem('pastes');
    },
    removeFromPastes: (state, action) => {
        const pasteID = action.payload;
        console.log(pasteID);

        const index = state.pastes.findIndex((item) => item._id === pasteID);

        if(index >= 0){
          state.pastes.splice(index, 1);
          localStorage.setItem("pastes", JSON.stringify(state.pastes));
          toast.success("Paste Deleted");
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer