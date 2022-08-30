import React from "react";
import { View, StyleSheet } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";

const LocationPicker = () => {
  const [locationInformationStatus, requestPermission] =
    useForegroundPermissions();

  const verifyPermissions = async () => {
    if (locationInformationStatus.status === PermissionStatus.UNDETERMINED) {
      const permission = await requestPermission();
      return permission.granted;
    }

    if (locationInformationStatus.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app.",
        [{ text: "Okay", style: "default" }]
      );

      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
  };

  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <View>
          <OutlineButton
            icon="locate"
            text="Locate User"
            onPress={getLocationHandler}
          />
        </View>

        <View>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
});
