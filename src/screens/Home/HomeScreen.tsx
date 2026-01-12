import StyroLogoIcon from "../../assets/icons/styroLogo";
import { ThemedText } from "../../components/core/ThemedText/ThemedText";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getHomeScreenStyles } from "./styles";
import { useStyles } from "../../hooks/useStyles";
import { useTheme } from "../../providers/ThemeProvider/ThemeProvider";
import { useAuth } from "../../providers/AuthProvider/AuthProvider";
import { useUserInfo } from "../../hooks/queries/use-user-info";

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
            Home
          </ThemedText>
          <ThemedText variant="h3" color={theme.colors.colors.textPrimary}>
            Hi {data?.data?.firstName ?? ""}
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
    </SafeAreaView>
  );
};

export default HomeScreen;
