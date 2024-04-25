import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
    name: 'file',
    initialState: {
        data: ''
    },
    reducers: {
        updateData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { updateData } = fileSlice.actions;
export default fileSlice.reducer;