import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MapPin, Search, ShoppingBagIcon } from "lucide-react-native";
import { useTheme } from "../../../providers/ThemeProvider/ThemeProvider";
import { ThemedText } from "../../core/ThemedText/ThemedText";
import StyroLogoIcon from "../../../assets/icons/styroLogo";

import { useNavigation } from "@react-navigation/native";
import { Navigations } from "../../../constants/navigation";
import { AppScreenNavigation } from "src/navigators/types";

export const AppHeader: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<AppScreenNavigation<"Home">>();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.colors.background },
      ]}
    >
      <View style={styles.leftSection}>
        <StyroLogoIcon size={32} color={theme.colors.colors.primary} />
        <View style={styles.locationContainer}>
          <View style={styles.locationLabelRow}>
            <ThemedText
              variant="caption"
              color={theme.colors.colors.textTertiary}
            >
              Deliver to
            </ThemedText>
            <MapPin
              size={12}
              color={theme.colors.colors.primary}
              style={{ marginLeft: 4 }}
            />
          </View>
          <ThemedText
            variant="bodySmall"
            weight="SemiBold"
            color={theme.colors.colors.textPrimary}
          >
            Chennai,Tamilnadu
          </ThemedText>
        </View>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity
          style={[
            styles.iconButton,
            { backgroundColor: theme.colors.colors.surface },
          ]}
        >
          <Search size={20} color={theme.colors.colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Navigations.CartScreen)}
          style={[
            styles.iconButton,
            { backgroundColor: theme.colors.colors.surface },
          ]}
        >
          <ShoppingBagIcon size={20} color={theme.colors.colors.textPrimary} />
          <View
            style={[
              styles.badge,
              { backgroundColor: theme.colors.colors.error },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 70,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  locationContainer: {
    justifyContent: "center",
  },
  locationLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "white",
  },
});
