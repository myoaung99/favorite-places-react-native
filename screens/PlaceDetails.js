import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is adding places screen</Text>
    </View>
  );
};

export default PlaceDetails;

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
