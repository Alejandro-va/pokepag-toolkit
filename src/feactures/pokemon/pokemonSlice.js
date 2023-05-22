import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//url para la api
import pokeapi from "../../components/common/api/pokeapi";

/*********************************************
 * DECLARACION DEL ESTADO INICIAL
 *********************************************/
const initialState = { pokemonState: [] };

/*********************************************
 * SLICE
 *********************************************/
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},

  //utilizo las funciones asincronas que cree fuera del pokemonSlice
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state, action) => {
        console.log("loading");
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.pokemonState = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {});
  },
});

export default pokemonSlice.reducer;

/*********************************************
 * FUNCION ASINCRONA PARA OBTENER  LA LISTA DE POKEMONS
 *********************************************/
export const fetchPokemons = createAsyncThunk("pokemons/get", async () => {
  const response = await pokeapi.get("?limit=20&offset=20");
  const { results } = response.data;

  //hago una solicitus adicional para obtener  lascaracteristicas de cada pokemon
  const pokemonDetail = await Promise.all(
    results.map(async (poke) => {
      const pokeResponse = await axios.get(poke.url);
      //console.log(pokeResponse);
      //return pokeResponse.data;
      return {
        id: pokeResponse.data.id,
        name: pokeResponse.data.name,
        urlImg: pokeResponse.data.sprites.other.dream_world.front_default,
        species: pokeResponse.data.species.name,
      };
    })
  );
  return pokemonDetail;
});
