import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = () => {

  return (
    <View style={styles.container}>
      <PlaceForm />
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
