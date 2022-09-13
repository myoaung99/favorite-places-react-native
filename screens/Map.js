import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

const Map = ({ navigation, route }) => {
  const initialLocation = route.params && {
    lat: route.params.lat,
    lng: route.params.lng,
  }

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const initialRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.78825,
    longitude: initialLocation ? initialLocation.lng : -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const pressSaveHandler = React.useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("Invalid location", "You must pick a location");
      return;
    }
    Alert.alert("Save the location!", "Do you want to select this location", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Okay",
        style: "default",
        onPress: () =>
          navigation.navigate("AddPlace", {
            pickedLatitude: selectedLocation.lat,
            pickedLongitude: selectedLocation.lng,
          }),
      },
    ]);
  }, [selectedLocation, navigation]);

  const headerRightIconButton = ({ tintColor }) => (
    <IconButton
      icon="save"
      color={tintColor}
      size={24}
      onPress={pressSaveHandler}
    />
  );

  useLayoutEffect(() => {
    if(initialLocation) return;
    navigation.setOptions({
      headerRight: headerRightIconButton,
    });
  }, [headerRightIconButton]);



  const selectLocationHandler = (event) => {
    if(initialLocation) return;
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({
      lat: latitude,
      lng: longitude,
    });
  };

  return (
    <MapView
      style={styles.map}
      onPress={selectLocationHandler}
      initialRegion={initialRegion}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
