import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character } from "../models/character";
import { ApiRepository } from "../../core/services/api.repository";

export type CharacterState = {
  characters: Character[];
  warcry: string;
  currentCharacter: Character;
};

const initialState: CharacterState = {
  characters: [],
  warcry: "",
  currentCharacter: {} as Character,
};

export const loadCharacterAsync = createAsyncThunk(
  "characters/load",
  async (repo: ApiRepository<Character>) => {
    return await repo.getAll();
  }
);

export const killCharacterAsync = createAsyncThunk<
  Character,
  { repo: ApiRepository<Character>; character: Character }
>("characters/update", async ({ repo, character }) => {
  return await repo.update(character.id, { ...character, alive: false });
});

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    toggleWarcry: (state, { payload }) => ({
      ...state,
      warcry: payload.warcry,
      currentCharacter: { ...payload },
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(loadCharacterAsync.fulfilled, (state, { payload }) => ({
      ...state,
      characters: payload,
    }));
    builder.addCase(killCharacterAsync.fulfilled, (state, { payload }) => ({
      ...state,
      characters: state.characters.map((item) =>
        item.id === payload.id ? payload : item
      ),
    }));
  },
});

export const { toggleWarcry } = characterSlice.actions;
export default characterSlice.reducer;
