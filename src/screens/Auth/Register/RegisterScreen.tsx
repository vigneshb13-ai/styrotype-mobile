import {
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useState } from "react";
import { useStyles } from "../../../hooks/index";
import { getRegisterScreenStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigation } from "../../../navigators/types";
import { ThemedText } from "../../../components/core/ThemedText/ThemedText";
import { useTheme } from "../../../providers/ThemeProvider/ThemeProvider";
import ThemedInput from "../../../components/core/ThemedInput/ThemedInput";
import {
  ArrowLeft,
  Eye,
  LockKeyhole,
  Mail,
  OctagonAlert,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StyroLogoIcon from "../../../assets/icons/styroLogo";

const RegisterScreen = () => {
  const styles = useStyles(getRegisterScreenStyles);
  const navigation = useNavigation<AuthScreenNavigation<"Register">>();
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailErr, setIsEmailErr] = useState(false);
  const [isPasswordErr, setIsPasswordErr] = useState(false);
  const [errorQueue, setErrorQueue] = useState<string[]>([]);

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
        <TouchableOpacity
          style={{ marginLeft: 10, position: "absolute", top: 60, left: 10 }}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft
            strokeWidth={1.5}
            height={24}
            width={24}
            color={"#ffffff"}
          />
        </TouchableOpacity>
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

          {/* Inputs */}
          <View style={styles.inputContainer}>
            <ThemedInput
              label="First Name"
              labelColor={isEmailErr ? "red" : "#6b7280"}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrorQueue((prev) =>
                  prev.filter((err) => !err.toLowerCase().includes("email"))
                );
                if (text.length > 0) setIsEmailErr(false);
              }}
              ref={emailRef}
              leftComponent={
                <Mail
                  strokeWidth={1.3}
                  height={18}
                  width={18}
                  color={isEmailErr ? "red" : "#6b7280"}
                />
              }
              isError={isEmailErr}
              errText={
                errorQueue[0]?.toLowerCase().includes("email")
                  ? errorQueue[0]
                  : ""
              }
            />
            <ThemedInput
              label="Last Name"
              labelColor={isEmailErr ? "red" : "#6b7280"}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrorQueue((prev) =>
                  prev.filter((err) => !err.toLowerCase().includes("email"))
                );
                if (text.length > 0) setIsEmailErr(false);
              }}
              ref={emailRef}
              leftComponent={
                <Mail
                  strokeWidth={1.3}
                  height={18}
                  width={18}
                  color={isEmailErr ? "red" : "#6b7280"}
                />
              }
              isError={isEmailErr}
              errText={
                errorQueue[0]?.toLowerCase().includes("email")
                  ? errorQueue[0]
                  : ""
              }
              rightComponent={
                isEmailErr && (
                  <OctagonAlert
                    strokeWidth={1.5}
                    height={18}
                    width={18}
                    color="red"
                  />
                )
              }
            />
            <ThemedInput
              label="Email"
              labelColor={isEmailErr ? "red" : "#6b7280"}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrorQueue((prev) =>
                  prev.filter((err) => !err.toLowerCase().includes("email"))
                );
                if (text.length > 0) setIsEmailErr(false);
              }}
              ref={emailRef}
              leftComponent={
                <Mail
                  strokeWidth={1.3}
                  height={18}
                  width={18}
                  color={isEmailErr ? "red" : "#6b7280"}
                />
              }
              isError={isEmailErr}
              errText={
                errorQueue[0]?.toLowerCase().includes("email")
                  ? errorQueue[0]
                  : ""
              }
              rightComponent={
                isEmailErr && (
                  <OctagonAlert
                    strokeWidth={1.5}
                    height={18}
                    width={18}
                    color="red"
                  />
                )
              }
            />
            <ThemedInput
              label="Password"
              labelColor={isPasswordErr ? "red" : "#6b7280"}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrorQueue((prev) =>
                  prev.filter((err) => !err.toLowerCase().includes("password"))
                );
                if (text.length > 0) setIsPasswordErr(false);
              }}
              ref={passwordRef}
              secureTextEntry
              leftComponent={
                <LockKeyhole
                  strokeWidth={1.5}
                  height={18}
                  width={18}
                  color={isPasswordErr ? "red" : "#6b7280"}
                />
              }
              rightComponent={
                <Eye strokeWidth={1.5} height={18} width={18} color="#6b7280" />
              }
              isError={isPasswordErr}
              errText={
                errorQueue[0]?.toLowerCase().includes("password")
                  ? errorQueue[0]
                  : ""
              }
            />
            <ThemedInput
              label="Confirm Password"
              labelColor={isPasswordErr ? "red" : "#6b7280"}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrorQueue((prev) =>
                  prev.filter((err) => !err.toLowerCase().includes("password"))
                );
                if (text.length > 0) setIsPasswordErr(false);
              }}
              ref={passwordRef}
              secureTextEntry
              leftComponent={
                <LockKeyhole
                  strokeWidth={1.5}
                  height={18}
                  width={18}
                  color={isPasswordErr ? "red" : "#6b7280"}
                />
              }
              rightComponent={
                <Eye strokeWidth={1.5} height={18} width={18} color="#6b7280" />
              }
              isError={isPasswordErr}
              errText={
                errorQueue[0]?.toLowerCase().includes("password")
                  ? errorQueue[0]
                  : ""
              }
            />
          </View>

          {/* Common Error */}
          {errorQueue[0] === "Invalid email or password" && (
            <ThemedText
              variant="caption"
              color={theme.colors.colors.error}
              style={{ marginVertical: 5, textAlign: "center" }}
            >
              {errorQueue[0]}
            </ThemedText>
          )}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              backgroundColor: theme.colors.colors.primary,
              paddingVertical: 12,
              justifyContent: "center",
              borderRadius: 8,
              width: "100%",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <ThemedText variant="body" color={theme.colors.colors.textPrimary}>
              Create an account
            </ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
