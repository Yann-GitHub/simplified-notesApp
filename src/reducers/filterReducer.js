import { createSlice } from "@reduxjs/toolkit";

/////////////// Storre without redux toolkit ////////////////////
// const filterReducer = (state = "ALL", action) => {
//   switch (action.type) {
//     case "SET_FILTER":
//       return action.payload;
//     default:
//       return state;
//   }
// };

/////////////// Store with redux toolkit ////////////////////
const filterSlice = createSlice({
  name: "filter",
  initialState: "ALL",
  reducers: {
    filterChange: (state, action) => action.payload,
  },
});

/////////////// Action creator without redux toolkit ////////////////////
// Action creator
// export const filterChange = (filter) => {
//   return {
//     type: "SET_FILTER",
//     payload: filter,
//   };
// };

// export default filterReducer;

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
