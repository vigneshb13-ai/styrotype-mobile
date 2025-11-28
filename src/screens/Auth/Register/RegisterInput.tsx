import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Eye, EyeOff, OctagonAlert } from "lucide-react-native";
import ThemedInput from "../../../components/core/ThemedInput/ThemedInput";

interface RegisterInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  inputRef: React.Ref<TextInput>;
  icon: React.ElementType;
  errorQueue: string[];
  secureTextEntry?: boolean;
  showErrorIcon?: boolean;
  showEyeIcon?: boolean;
}

const RegisterInput = ({
  label,
  value,
  onChangeText,
  inputRef,
  icon: Icon,
  errorQueue,
  secureTextEntry,
  showErrorIcon,
  showEyeIcon,
}: RegisterInputProps) => {
  const [isSecure, setIsSecure] = React.useState(secureTextEntry);
  const error = errorQueue.find((err) =>
    err.toLowerCase().includes(label.toLowerCase())
  );
  const hasError = !!error;
  const color = hasError ? "red" : "#6b7280";

  const rightComponent = (() => {
    if (showErrorIcon && hasError) {
      return (
        <OctagonAlert strokeWidth={1.5} height={18} width={18} color="red" />
      );
    }
    if (showEyeIcon) {
      return (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          {isSecure ? (
            <Eye strokeWidth={1.5} height={18} width={18} color="#6b7280" />
          ) : (
            <EyeOff strokeWidth={1.5} height={18} width={18} color="#6b7280" />
          )}
        </TouchableOpacity>
      );
    }
    return undefined;
  })();

  return (
    <ThemedInput
      label={label}
      labelColor={color}
      value={value}
      onChangeText={onChangeText}
      ref={inputRef}
      secureTextEntry={isSecure}
      leftComponent={
        <Icon
          strokeWidth={secureTextEntry ? 1.5 : 1.3}
          height={18}
          width={18}
          color={color}
        />
      }
      isError={hasError}
      errText={error || ""}
      rightComponent={rightComponent}
    />
  );
};

export default RegisterInput;
