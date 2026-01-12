import StyroLogoIcon from "../../assets/icons/styroLogo";
import { ThemedText } from "../../components/core/ThemedText/ThemedText";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getHomeScreenStyles } from "./styles";
import { useStyles } from "../../hooks/useStyles";
import { useTheme } from "../../providers/ThemeProvider/ThemeProvider";
import { useAuth } from "../../providers/AuthProvider/AuthProvider";
import { useUserInfo } from "../../hooks/queries/use-user-info";
import { AppHeader } from "../../components/shared";

const HomeScreen = () => {
  const theme = useTheme();
  const styles = useStyles(getHomeScreenStyles);
  const { user } = useAuth();
  const { data } = useUserInfo(user?.uid);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.colors.background },
      ]}
      edges={["top", "bottom", "left", "right"]}
    >
      <AppHeader />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: 16,
            gap: 20,
            paddingBottom: 100, // accommodate bottom tabs if needed, though safearea handles it
          }}
        >
          <View style={{ gap: 10, alignItems: "flex-start" }}>
            <ThemedText variant="h2" color={theme.colors.colors.textPrimary}>
              Hi {data?.data?.firstName ?? ""}
            </ThemedText>
            <ThemedText
              style={{ lineHeight: 20 }}
              variant="bodySmall"
              color={theme.colors.colors.textPrimary}
            >
              Step into Styrotype, your ultimate destination for style, tech,
              and lifestyle essentials. Enjoy seamless shopping, lightning-fast
              delivery, and deals you can’t resist.
            </ThemedText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
