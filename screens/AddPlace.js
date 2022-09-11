import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = ({ navigation }) => {
  const addPlaceHandler = (place) => {
    navigation.navigate("AllPlaces", {
      place,
    });
  };

  return (
    <View style={styles.container}>
      <PlaceForm onAddPlace={addPlaceHandler} />
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
