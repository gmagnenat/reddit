import { createSlice } from "@reduxjs/toolkit";

export const subSlice = createSlice({
    name: 'sub',
    initialState: {
        sub: 'popular',
    },
    reducers: {
        setSub: (state, action) => {
            state.sub = action.payload;
        },
    },
});

export const { setSub } = subSlice.actions;

export default subSlice.reducer;