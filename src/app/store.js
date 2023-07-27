import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../feactures/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: { pokemonStore: pokemonSlice },
});
