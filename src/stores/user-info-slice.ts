import { StateCreator } from "zustand";

import { CombineStoreState } from "../types/store";
import { UserInfoSlice } from "../types/user-info";

const userInfoSlice: StateCreator<CombineStoreState, [], [], UserInfoSlice> = (
  set,
  get
) => ({
  userInfo: {
    authProvider: "",
    createdAt: "",
    email: "",
    emailVerified: false,
    firebaseUid: "",
    firstName: "",
    gender: "",
    isActive: false,
    isProfileComplete: false,
    lastLoginAt: "",
    lastName: "",
    phone: "",
    phoneVerified: false,
    photoUrl: "",
    role: "",
    updatedAt: "",
    _id: "",
  },
  setUserInfo: (userInfo) => set({ userInfo }),
});

export default userInfoSlice;
