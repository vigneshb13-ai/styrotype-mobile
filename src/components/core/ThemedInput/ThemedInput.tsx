import React, {
  forwardRef,
  ReactNode,
  useRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { View, TextInput, TextInputProps, Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { ThemedText } from "../ThemedText/ThemedText";
import { useTheme } from "../../../providers/ThemeProvider/ThemeProvider";
import { useStyles } from "../../../hooks";
import { getInputStyles } from "./styles";

type ThemedInputProps = TextInputProps & {
  label: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  isError?: boolean;
  errText?: string;
  labelColor?: string;
};

const ThemedInput = forwardRef<TextInput, ThemedInputProps>(
  (
    {
      label,
      isError,
      errText,
      labelColor,
      leftComponent,
      rightComponent,
      value = "",
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    // floating label
    const labelY = useSharedValue(value ? -1 : 0);
    const labelX = useSharedValue(value ? -10 : 0);

    const animatedLabelStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: labelY.value }, { translateX: labelX.value }],
    }));
    const styles = useStyles(getInputStyles);
    // error animation
    const errorY = useSharedValue(10);
    const errorOpacity = useSharedValue(0);
    const theme = useTheme();

    useEffect(() => {
      if (isError) {
        errorY.value = withTiming(0, { duration: 200 });
        errorOpacity.value = withTiming(1, { duration: 200 });
      } else {
        errorY.value = withTiming(10, { duration: 200 });
        errorOpacity.value = withTiming(0, { duration: 200 });
      }
    }, [isError]);

    const animatedErrorStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: errorY.value }],
      opacity: errorOpacity.value,
    }));

    // local ref so we can programmatically focus
    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <View style={styles.mainContainer}>
        <Pressable onPress={() => inputRef.current?.focus()}>
          <Animated.Text
            style={[
              styles.text,
              { left: leftComponent ? 34 : 14, color: labelColor },
              animatedLabelStyle,
            ]}
          >
            {label}
          </Animated.Text>
        </Pressable>

        {/* Pressable wraps the whole input */}
        <Pressable
          style={[
            styles.inputContainer,
            {
              borderColor: isError
                ? theme.colors.colors.error
                : theme.colors.colors.border,
            },
          ]}
          onPress={() => inputRef.current?.focus()}
        >
          {leftComponent && <View style={styles.left}>{leftComponent}</View>}
          <TextInput
            ref={inputRef}
            style={styles.textInput}
            value={value}
            onFocus={(e) => {
              labelY.value = withTiming(-36, { duration: 200 });
              labelX.value = withTiming(leftComponent ? -28 : -10, {
                duration: 200,
              });
              onFocus?.(e);
            }}
            onBlur={(e) => {
              if (!value) {
                labelY.value = withTiming(0, { duration: 200 });
                labelX.value = withTiming(0, { duration: 200 });
              }
              onBlur?.(e);
            }}
            {...props}
          />
          {rightComponent && <View style={styles.right}>{rightComponent}</View>}
        </Pressable>

        {/* animated error */}
        <Animated.View style={[animatedErrorStyle, { marginTop: 4, left: 6 }]}>
          {isError && (
            <ThemedText color={theme.colors.colors.error} variant="caption">
              {errText}
            </ThemedText>
          )}
        </Animated.View>
      </View>
    );
  }
);

export default ThemedInput;
