import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "../providers/ThemeProvider/ThemeProvider";
import AuthStackNavigator from "./AuthStackNavigator";
import { RootStackParamList } from "./types";
import { useAuth } from "../providers/AuthProvider/AuthProvider";
import AppStackNavigator from "./AppStackNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const theme = useTheme();
  const { user, loading } = useAuth(); // get user and loading
  const screenOptions = {
    headerShown: false,
    contentStyle: { backgroundColor: theme.colors.colors.background },
  };

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {user ? (
        <Stack.Screen name="App" component={AppStackNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
