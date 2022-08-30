import React from "react";
import { View, StyleSheet } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";

const LocationPicker = () => {
  const getLocationHandler = () => {};
  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <View style={{ flex: 1, marginRight: 5 }}>
          <OutlineButton icon="locate" text="Locate User" />
        </View>

        <View style={{ flex: 1, marginLeft: 5 }}>
          <OutlineButton icon="map" text="Pick On Map" />
        </View>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.primary100,
    marginTop: 28,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    color: Colors.gray700,
    borderRadius: 2,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
