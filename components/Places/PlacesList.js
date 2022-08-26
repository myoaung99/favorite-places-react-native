import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";
import Place from "./PlaceItem";

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places add yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place place={item} />}
      />
    </View>
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary500,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
