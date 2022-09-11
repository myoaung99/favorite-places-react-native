import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import IconButton from "../components/UI/IconButton";
import { places } from "../data/places";
import { useIsFocused } from "@react-navigation/native";

const AllPlaces = ({ navigation, route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState(places);
  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus && route.params) {
      setLoadedPlaces((current) => [...current, route.params.place]);
    }
  }, [isFocus]);


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

  console.log("All place screen is mounted.")

  return (
    <View style={styles.container}>
      <PlacesList places={[]} />
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
