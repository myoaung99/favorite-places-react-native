import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const CustomButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary500,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingVertical: 4,
  },
  pressed: {
    opacity: 0.75,
  },
});
