import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import {insertPlace} from "../util/database";

const AddPlace = ({ navigation}) => {
  const addPlacePlaceHandler =async (place) => {
    console.log(place);
    await insertPlace(place);
    navigation.navigate('AllPlaces')
  }

  return (
    <View style={styles.container}>
      <PlaceForm onAddPlace={addPlacePlaceHandler}/>
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
