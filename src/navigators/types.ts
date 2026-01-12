import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  AuthSelection: undefined;
  Login: undefined;
  Register: undefined;
};

export type AppStackParamList = {
  BottomTabs: undefined;
  Home: undefined;
  Categories: undefined;
  Profile: undefined;
  Cart: undefined;
};
export type BottomTabsParamList = {
  Home: undefined;
  Categories: undefined;
  Profile: undefined;
  Wishlist: undefined;
  Cart: undefined;
};
export type RootStackParamList = {
  Splash: undefined;
  Onboarding: { step?: number };
  Auth: undefined;
  App: undefined;
};
export type AuthScreenNavigation<T extends keyof AuthStackParamList> =
  NativeStackNavigationProp<AuthStackParamList, T>;
export type AppScreenNavigation<T extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, T>;
