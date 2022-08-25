import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import IconButton from "../components/UI/IconButton";
import { places } from "../data/places";

const AllPlaces = ({ navigation }) => {
  const headerRightIconButton = ({ tintColor }) => (
    <IconButton
      icon="add"
      color={tintColor}
      size={32}
      onPress={() => navigation.navigate("AddPlace")}
    />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: headerRightIconButton,
    });
  }, []);

  return (
    <View style={styles.container}>
      <PlacesList places={places} />
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
