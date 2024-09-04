import { createSlice } from "@reduxjs/toolkit";

export interface NavState {
  isNavOpen: boolean;
}

const initialState: NavState = {
  isNavOpen: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNav: (state, action) => {
      state.isNavOpen = action.payload;
    },
  },
});

export const { setNav } = navSlice.actions;
export default navSlice.reducer;
