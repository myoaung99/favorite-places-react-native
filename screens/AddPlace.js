import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddPlace = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is adding places screen</Text>
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "skyblue",
  },
});
