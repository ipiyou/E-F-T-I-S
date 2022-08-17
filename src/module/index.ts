import { combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "..";
import ItemSlice from "./ItemListSlice";
import recentSlice from "./recentReducer";

export const rootReducer = combineReducers({
  recent: recentSlice.reducer,
  item: ItemSlice.reducer,
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
