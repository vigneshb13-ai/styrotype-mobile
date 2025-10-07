import { Theme } from "../../../theme/index";
import { StyleSheet } from "react-native";

export const getAuthSeletionScreenStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.colors.background,
    },
    inputContainer: {
      width: "100%",
      gap: 20,
    },
    buttonContainer: {
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      marginTop: 18,
    },
    button: {
      height: 50,
      width: "100%",
      backgroundColor: theme.colors.colors.background,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 10,
    },
  });
