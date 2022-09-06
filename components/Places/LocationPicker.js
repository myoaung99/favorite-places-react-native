import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useEffect } from "react";

const LocationPicker = () => {
  const [locationInformationStatus, requestPermission] =
    useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();

  const navigation = useNavigation();
  const route = useRoute();
  const isFoucs = useIsFocused();

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

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });

    // pass coords to GOOGLE MAP API to get preview image NEED CREDIT CARD
  };

  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  useEffect(() => {
    if (isFoucs && route.params) {
      const pickOnMapLocation = {
        lat: route.params.pickedLatitude,
        lng: route.params.pickedLongitude,
      };

      setPickedLocation(pickOnMapLocation);
    }
  }, [isFoucs, route.params]);

  console.log("PickedLocation => ", pickedLocation);

  useEffect(() => {
    // use picked location to get preview image
  }, []);

  let mapPreview = <Text>No location picked yet!</Text>;

  return (
    <View>
      <View style={styles.mapPreview}>{mapPreview}</View>
      <View style={styles.actions}>
        <View>
          <OutlineButton
            icon="locate"
            text="Locate User"
            onPress={getLocationHandler}
          />
        </View>

        <View>
          <OutlineButton
            icon="map"
            text="Pick On Map"
            onPress={pickOnMapHandler}
          />
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
