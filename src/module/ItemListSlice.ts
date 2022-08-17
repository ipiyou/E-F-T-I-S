import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiType, GetItemAll } from "../apis/GetItemAll";

export const GetItemThunk = createAsyncThunk(
  "Get_SearchItem",
  async (keyWord: string, thunkApi) => {
    const data = await GetItemAll(keyWord);
    return data;
  }
);

interface initState {
  items: ApiType[];
  cureentItems: ApiType[];
  loading: boolean;
  error: boolean;
}

const initialState = {
  items: [],
  cureentItems: [],
  loading: false,
  error: false,
} as initState;

const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    SliceNextItem(state, action: PayloadAction<number>) {
      if (state.items !== []) {
        let Next = state.items.splice(-action.payload);
        state.cureentItems = state.cureentItems.concat(Next);
      }
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(GetItemThunk.fulfilled, (state, action) => {
      let data = action.payload.items;
      state.cureentItems = data.splice(0, 20);
      state.items = data;
      state.loading = false;
    })
      .addCase(GetItemThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetItemThunk.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { SliceNextItem } = ItemSlice.actions;

export default ItemSlice;
