import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomID: null,
    roomName: null,
  },
  reducers: {
    setRommInfos: (state, action) => {
      state.roomID = action.payload.roomID;
      state.roomName = action.payload.roomName;
    },
  },
});

export const { setRommInfos } = appSlice.actions;

export const selectRoomID = state => state.app.roomID;
export const selectRoomName = state => state.app.roomName;

export default appSlice.reducer;
