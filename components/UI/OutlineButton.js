import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const OutlineButton = ({ icon, text, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={Colors.primary500} size={18} />
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingVertical: 8,
  },
  buttonText: {
    color: Colors.primary500,
    fontSize: 12,
    marginLeft: 6,
  },
  pressed: {
    opacity: 0.75,
  },
});
