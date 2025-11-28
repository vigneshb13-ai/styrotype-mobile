import { View, TouchableOpacity, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { useStyles } from "../../../hooks/index";
import { getRegisterScreenStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigation } from "../../../navigators/types";
import { ThemedText } from "../../../components/core/ThemedText/ThemedText";
import { useTheme } from "../../../providers/ThemeProvider/ThemeProvider";
import RegisterInput from "./RegisterInput";
import { ArrowLeft, LockKeyhole, Mail, Phone } from "lucide-react-native";

import StyroLogoIcon from "../../../assets/icons/styroLogo";
import { validateEmail } from "../../../utils/shared";
import { useAuth } from "../../../providers/AuthProvider/AuthProvider";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const RegisterScreen = () => {
  const styles = useStyles(getRegisterScreenStyles);
  const navigation = useNavigation<AuthScreenNavigation<"Register">>();
  const theme = useTheme();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errorQueue, setErrorQueue] = useState<string[]>([]);
  const { register } = useAuth();
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  const confirmPasswordRef = useRef<TextInput>(null);

  const handleRegister = async () => {
    setErrorQueue([]);
    if (!validateEmail(userDetails.email)) {
      setErrorQueue(["Invalid email format."]);
      return;
    }

    if (!userDetails.password || userDetails.password.length < 6) {
      setErrorQueue(["Password must be at least 6 characters."]);
      return;
    }
    if (userDetails.password !== userDetails.confirmPassword) {
      setErrorQueue(["Passwords do not match."]);
      return;
    }
    const result = await register(userDetails.email, userDetails.password);
    if (result.success) {
      console.log("#########", result.userCredential);
    } else {
      setErrorQueue([result.error ?? "Registration failed. Please try again."]);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={[styles.container]}
      keyboardShouldPersistTaps="handled"
      bottomOffset={180}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1 }}>
        <>
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
        </>

        {/* Content */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingVertical: 80,
            width: "100%",
            gap: 30,
            top: 10,
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft
              strokeWidth={1.5}
              height={24}
              width={24}
              color={theme.colors.colors.textPrimary}
            />
          </TouchableOpacity>
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
            <RegisterInput
              label="First Name"
              value={userDetails.firstName}
              onChangeText={(text) =>
                setUserDetails({ ...userDetails, firstName: text })
              }
              inputRef={firstNameRef}
              icon={Mail}
              errorQueue={errorQueue}
            />
            <RegisterInput
              label="Last Name"
              value={userDetails.lastName}
              onChangeText={(text) =>
                setUserDetails({ ...userDetails, lastName: text })
              }
              inputRef={lastNameRef}
              icon={Mail}
              errorQueue={errorQueue}
              showErrorIcon
            />
            <RegisterInput
              label="Email"
              value={userDetails.email}
              onChangeText={(text) =>
                setUserDetails({ ...userDetails, email: text })
              }
              inputRef={emailRef}
              icon={Mail}
              errorQueue={errorQueue}
              showErrorIcon
            />
            <RegisterInput
              label="Phone"
              value={userDetails.phone}
              onChangeText={(text) =>
                setUserDetails({ ...userDetails, phone: text })
              }
              inputRef={phoneRef}
              icon={Phone}
              errorQueue={errorQueue}
              showErrorIcon
            />
            <RegisterInput
              label="Password"
              value={userDetails.password}
              onChangeText={(text) =>
                setUserDetails({ ...userDetails, password: text })
              }
              inputRef={passwordRef}
              icon={LockKeyhole}
              errorQueue={errorQueue}
              secureTextEntry
              showEyeIcon
            />
            <RegisterInput
              label="Confirm Password"
              value={userDetails.confirmPassword}
              onChangeText={(text) =>
                setUserDetails({ ...userDetails, confirmPassword: text })
              }
              inputRef={confirmPasswordRef}
              icon={LockKeyhole}
              errorQueue={errorQueue}
              secureTextEntry
              showEyeIcon
            />
          </View>
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
            onPress={() => handleRegister()}
          >
            <ThemedText variant="body" color={theme.colors.colors.text}>
              Create an account
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
