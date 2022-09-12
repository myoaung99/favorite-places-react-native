import React, {useEffect, useLayoutEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import PlacesList from "../components/Places/PlacesList";
import IconButton from "../components/UI/IconButton";
import {useIsFocused} from "@react-navigation/native";
import {fetchPlaces} from "../util/database";

const AllPlaces = ({ navigation }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFoucsed = useIsFocused();

  useEffect(()=>{
    const loadPlaces = async ()=>{
      const places = await fetchPlaces();
      setLoadedPlaces(places)
    }
    if(isFoucsed){
      loadPlaces();
    }
  }, [isFoucsed]);

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
      <PlacesList places={loadedPlaces} />
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
