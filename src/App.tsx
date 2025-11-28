import React from "react";
import { ThemeProvider } from "./providers/ThemeProvider/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./navigators/RootStackNavigator";
import { AuthProvider } from "./providers/AuthProvider/AuthProvider";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function App() {
  return (
    <KeyboardProvider>
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
    </KeyboardProvider>
  );
}
