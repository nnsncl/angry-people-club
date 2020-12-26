import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomID: null,
    roomName: null,
  },
  reducers: {
    setRommID: (state, action) => {
      state.app += action.payload;
    },
  },
});

export const { setRommID } = appSlice.actions;

export const selectRoomID = state => state.app.roomID;
export const selectRoomName = state => state.app.roomName;

export default appSlice.reducer;
