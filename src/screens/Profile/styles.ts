import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const getProfileScreenStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      gap: 20,
      backgroundColor: theme.colors.colors.background,
    },
    button: {
      height: 50,
      width: "100%",
      backgroundColor: theme.colors.colors.error,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    cartBtn: {
      height: 50,
      width: "100%",
      backgroundColor: theme.colors.colors.primaryDark,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });
