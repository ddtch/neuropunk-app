import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  loggedIn: boolean,
  faceIdAvailable: boolean,
}

const initialState: AuthState = {
  loggedIn: false,
  faceIdAvailable: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInStatus: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setFaceIdAvailability: (state, action: PayloadAction<boolean>) => {
      state.faceIdAvailable = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoggedInStatus,
  setFaceIdAvailability,
} = authSlice.actions;

export default authSlice.reducer;
