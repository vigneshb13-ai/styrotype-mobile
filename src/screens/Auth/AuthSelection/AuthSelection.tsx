import {
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef } from "react";
import { useStyles } from "../../../hooks/index";
import { getAuthSeletionScreenStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigation } from "../../../navigators/types";
import { ThemedText } from "../../../components/core/ThemedText/ThemedText";
import { useTheme } from "../../../providers/ThemeProvider/ThemeProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import StyroLogoIcon from "../../../assets/icons/styroLogo";
import GoogleLogo from "../../../assets/icons/googleIcon";
import { Mail, Smartphone } from "lucide-react-native";

const AuthSelctionScreen = () => {
  const styles = useStyles(getAuthSeletionScreenStyles);
  const navigation = useNavigation<AuthScreenNavigation<"Login">>();
  const theme = useTheme();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onPressOutside = () => {
    emailRef.current?.blur();
    passwordRef.current?.blur();
  };

  return (
    <TouchableWithoutFeedback onPress={onPressOutside}>
      <SafeAreaView
        style={[styles.container]}
        edges={["bottom", "left", "right"]}
      >
        {/* Background Circles */}
        <View
          style={{
            width: 300,
            height: 300,
            borderRadius: 200,
            backgroundColor: theme.colors.colors.primaryLight,
            position: "absolute",
            top: -90,
            right: -140,
          }}
        />
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: 200,
            backgroundColor: theme.colors.colors.primary,
            position: "absolute",
            top: -50,
            right: -100,
          }}
        />

        {/* Content */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
            width: "100%",
            gap: 10,
          }}
        >
          <View style={{ gap: 8, marginBottom: 10 }}>
            <View style={{ gap: 0, marginBottom: 1 }}>
              <StyroLogoIcon
                color={theme.colors.colors.primary}
                width={80}
                height={80}
              />
            </View>
            <ThemedText
              variant="h3"
              color={theme.colors.colors.textPrimary}
              style={{ lineHeight: 20 }}
            >
              STYROTYPE
            </ThemedText>
            <ThemedText
              variant="bodySmall"
              color={theme.colors.colors.textTertiary}
              style={{ lineHeight: 20 }}
            >
              OMG, look who showed up! Your outfits were doing reels without
              you. Log in before they go viral!
            </ThemedText>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.colors.primary,
                minWidth: "100%",
                paddingVertical: 12,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                flexDirection: "row",
                gap: 12,
              }}
              onPress={() => navigation.navigate("Login")}
            >
              <Mail height={20} width={20} color={theme.colors.colors.text} />
              <ThemedText variant="body" color={theme.colors.colors.text}>
                Continue with Email
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 8,
                borderWidth: 0.7,
                borderColor: theme.colors.colors.border,
                alignItems: "center",
                paddingVertical: 12,
                justifyContent: "center",
                borderRadius: 8,
                width: "100%",
              }}
            >
              <GoogleLogo height={20} width={20} />
              <ThemedText
                variant="body"
                color={theme.colors.colors.textPrimary}
              >
                Continue with Google
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 8,
                borderWidth: 0.7,
                borderColor: theme.colors.colors.border,
                alignItems: "center",
                paddingVertical: 12,
                justifyContent: "center",
                borderRadius: 8,
                width: "100%",
              }}
            >
              <Smartphone
                height={20}
                width={20}
                color={theme.colors.colors.textPrimary}
              />
              <ThemedText
                variant="body"
                color={theme.colors.colors.textPrimary}
              >
                Continue with Mobile
              </ThemedText>
            </TouchableOpacity>
          </View>

          {/* Signup */}
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <ThemedText
                variant="bodySmall"
                color={theme.colors.colors.textPrimary}
              >
                Or create an account{" "}
                <ThemedText
                  variant="bodySmall"
                  color={theme.colors.colors.primary}
                >
                  with Email
                </ThemedText>
              </ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AuthSelctionScreen;
