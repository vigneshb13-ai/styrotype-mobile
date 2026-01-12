import { create } from "zustand";
import { CombineStoreState } from "../types/store";
import userInfoSlice from "./user-info-slice";

export const useStore = create<CombineStoreState>((...a) => ({
  ...userInfoSlice(...a),
}));
