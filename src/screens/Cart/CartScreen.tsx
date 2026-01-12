import { View, Text } from "react-native";
import React from "react";
import { getCartScreenStyles } from "./styles";
import { useStyles } from "../../hooks/useStyles";

const CartScreen = () => {
  const styles = useStyles(getCartScreenStyles);
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;
