import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character } from "../models/character";
import { ApiRepository } from "../../core/services/api.repository";

export type CharacterState = {
  characters: Character[];
};

const initialState: CharacterState = {
  characters: [],
};

export const loadCharacterAsync = createAsyncThunk(
  "characters/load",
  async (repo: ApiRepository<Character>) => {
    return await repo.getAll();
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCharacterAsync.fulfilled, (state, { payload }) => ({
      ...state,
      characters: payload,
    }));
  },
});

export default characterSlice.reducer;
