import { View } from "react-native";
import React from "react";
import { getWishlistScreenStyles } from "./styles";
import { useStyles } from "../../hooks/useStyles";
import { ThemedText } from "../../components/core/ThemedText/ThemedText";
import { useTheme } from "../../providers/ThemeProvider/ThemeProvider";

const WishlistScreen = () => {
  const styles = useStyles(getWishlistScreenStyles);
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <ThemedText variant="h2" color={theme.colors.colors.textPrimary}>
        Wishlist
      </ThemedText>
    </View>
  );
};

export default WishlistScreen;
