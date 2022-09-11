import React, {useEffect, useLayoutEffect, useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import IconButton from "../components/UI/IconButton";
import { places } from "../data/places";
import {useIsFocused} from "@react-navigation/native";

const AllPlaces = ({ navigation, route }) => {
  // const [loadedPlaces, setLoadedPlaces] = useState();
  const isFoucsed = useIsFocused();

  useEffect(()=>{
    if(isFoucsed && route?.params){
      console.log(route.params.place)
    }
  }, [isFoucsed, route.params]);

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
