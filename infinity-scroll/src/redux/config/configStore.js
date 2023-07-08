import { configureStore } from "@reduxjs/toolkit";
import dogList from "../modules/itemSlice";

const store = configureStore({
  reducer: { dogList: dogList },
});

export default store;
