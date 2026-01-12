export type UserInfoSlice = {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
};

export type UserInfo = {
  authProvider: string;
  createdAt: string;
  email: string;
  emailVerified: boolean;
  firebaseUid: string;
  firstName: string;
  gender: string;
  isActive: boolean;
  isProfileComplete: boolean;
  lastLoginAt: string;
  lastName: string;
  phone: string;
  phoneVerified: boolean;
  photoUrl: string;
  role: string;
  updatedAt: string;
  _id: string;
};

export type UserResponse = {
  status: string;
  data: UserInfo;
  message: string;
};
