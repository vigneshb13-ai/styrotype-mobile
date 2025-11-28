import StyroLogoIcon from "../../assets/icons/styroLogo";
import { ThemedText } from "../../components/core/ThemedText/ThemedText";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getHomeScreenStyles } from "./styles";
import { useStyles } from "../../hooks/useStyles";
import { useTheme } from "../../providers/ThemeProvider/ThemeProvider";
import { useAuth } from "../../providers/AuthProvider/AuthProvider";
import { useCallback, useEffect } from "react";
import { getAuth, signOut } from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { AppScreenNavigation } from "../../navigators/types";
import { get } from "../../services/axios-client";

const HomeScreen = () => {
  const theme = useTheme();
  const styles = useStyles(getHomeScreenStyles);
  const { user } = useAuth();
  const navigation = useNavigation<AppScreenNavigation<"Home">>();
  const logout = useCallback(async () => {
    try {
      await signOut(getAuth());
    } catch (err) {
      console.log("Logout error:", err);
    }
  }, []);

  useEffect(() => {
    if (!user) return;

    get(`/users/${user.uid}`)
      .then((res) => {
        console.log("#########", res);
      })
      .catch((err) => {
        console.log("#########", err);
      });
  }, [user]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.colors.background },
      ]}
      edges={["bottom", "left", "right"]}
    >
      <View
        style={{
          flex: 8,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
          gap: 10,
        }}
      >
        <StyroLogoIcon color={theme.colors.colors.primary} />
        <View
          style={{ gap: 7, justifyContent: "center", alignItems: "center" }}
        >
          <ThemedText variant="h2" color={theme.colors.colors.textPrimary}>
            Styrotype
          </ThemedText>
          <ThemedText variant="h3" color={theme.colors.colors.textPrimary}>
            Hi {user?.email ?? ""}
          </ThemedText>
          <ThemedText
            style={{ textAlign: "center", lineHeight: 20 }}
            variant="bodySmall"
            color={theme.colors.colors.textPrimary}
          >
            Step into Styrotype, your ultimate destination for style, tech, and
            lifestyle essentials. Enjoy seamless shopping, lightning-fast
            delivery, and deals you can’t resist.
          </ThemedText>
        </View>
      </View>
      <View style={{ flex: 0.5, gap: 20, marginHorizontal: 20 }}>
        <TouchableOpacity
          style={styles.categoryBtn}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Categories");
          }}
        >
          <ThemedText variant="body" color={theme.colors.colors.text}>
            Go to Categories
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={logout}
        >
          <ThemedText variant="body" color={theme.colors.colors.text}>
            Logout
          </ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
