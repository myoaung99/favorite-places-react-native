import React from "react";
import {ScrollView, View, Text, StyleSheet, Image} from "react-native";
import OutlineButton from "../components/UI/OutlineButton";
import {Colors} from "../constants/colors";

const PlaceDetails = () => {
  return (
    <ScrollView >
      <Image style={styles.image}/>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>ADDRESS</Text>
        </View>

        <OutlineButton text="View On Map" icon="map" onPress={()=>{}}/>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '35%',
    minHeight: 300,
  },
  locationContainer: {
    padding: 20,
  },
  addressContainer: {
    alignItems: 'center',
    justifyContent: "center"
  },
  address: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary500,
  },

});
