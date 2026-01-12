import { View, TouchableOpacity, Alert } from "react-native";
import React, { useCallback } from "react";
import { getProfileScreenStyles } from "./styles";
import { useStyles } from "../../hooks/useStyles";
import { ThemedText } from "../../components/core/ThemedText/ThemedText";
import { getAuth, signOut } from "@react-native-firebase/auth";
import { useTheme } from "../../providers/ThemeProvider/ThemeProvider";
import { useStore } from "../../stores";

const ProfileScreen = () => {
  const styles = useStyles(getProfileScreenStyles);
  const theme = useTheme();

  const { userInfo } = useStore();
  const logout = useCallback(async () => {
    try {
      await signOut(getAuth());
    } catch (err) {
      console.log("Logout error:", err);
    }
  }, []);
  const onPressLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: logout,
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <ThemedText variant="h2" color={theme.colors.colors.textPrimary}>
        Profile
      </ThemedText>
      <ThemedText variant="h2" color={theme.colors.colors.textPrimary}>
        {userInfo?.firstName}
      </ThemedText>
      <TouchableOpacity style={styles.cartBtn} activeOpacity={0.8}>
        <ThemedText variant="body" color={theme.colors.colors.text}>
          Go to Cart
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onPressLogout}
      >
        <ThemedText variant="body" color={theme.colors.colors.text}>
          Logout
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
