import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Domains", icon: "icon-bed" },
    { id: 2, name: "Softwares", icon: "icon-destination" },
    { id: 3, name: "Theme/Templates", icon: "icon-ski" },
    { id: 4, name: "Cloud Servers", icon: "icon-home" },
    { id: 5, name: "Digital Services", icon: "icon-car" }
  ],
  currentTab: "Softwares",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
