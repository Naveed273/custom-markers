import React, { useState, useRef, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// custom map styling
const cumstomMapStyling = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];
const CustomMarker = ({ coordinate }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("./assets/taxi.jpg")}
        resizeMode="contain"
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text style={{ color: "red" }}>{`latitude: ${coordinate.latitude}`}</Text>
      <Text
        style={{ color: "red" }}
      >{`longitude: ${coordinate.longitude}`}</Text>
    </View>
  );
};

export default function App() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [marker1, setmarker1] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  useEffect(() => {}, [marker1]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapView}>
        <MapView
          initialRegion={mapRegion}
          // region={mapRegion}
          style={styles.map}
          customMapStyle={cumstomMapStyling}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton
          showsCompass
          showsTraffic
          showsIndoors
          minZoomLevel={2}
          maxZoomLevel={20}
          loadingEnabled
          loadingIndicatorColor="#ffff"
        >
          <Marker
            identifier="drivermarker1"
            coordinate={marker1}
            draggable={true}
            onDrag={(e) => {
              setmarker1({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
            onDragEnd={(e) => {
              console.log({ onMarkerDragEnd: e.nativeEvent });
              setmarker1({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <CustomMarker coordinate={marker1} />
          </Marker>
        </MapView>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.titleButtonView}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Afternoon Naveed !</Text>
            <Text style={styles.whereText}>Where to</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.button}>Now</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.iconTextView}>
            <View style={styles.iconView}>
              <Ionicons
                name="location-sharp"
                size={hp("2.5%")}
                color={"#9C9EB9"}
              />
            </View>
            <Text style={styles.iconText}>Pickup location</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.horizontalLine} />
        <TouchableOpacity>
          <View style={styles.iconTextView}>
            <View style={styles.iconView}>
              <MaterialCommunityIcons
                name="map-marker-path"
                size={hp("2.5%")}
                color={"#9C9EB9"}
              />
            </View>
            <Text style={styles.iconText}>In-Ride stops</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.horizontalLine} />
        <TouchableOpacity>
          <View style={styles.iconTextView}>
            <View style={styles.iconView}>
              <Entypo name="circle" size={hp("2.5%")} color={"#9C9EB9"} />
            </View>
            <Text style={styles.iconText}>To</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.horizontalLine} />
        <TouchableOpacity>
          <View style={styles.favButton}>
            <View style={styles.circle}>
              <Entypo name="plus" size={hp("2.5%")} color="#000" />
            </View>
            <Text style={styles.favText}>Add favourite places</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapView: {
    flex: 1.75,

    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  bottomView: {
    flex: 1,
    width: "100%",
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  titleButtonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(3),
  },
  title: {
    fontSize: hp(2.2),
    fontWeight: "600",
    color: "black",
  },
  whereText: {
    fontSize: hp(1.5),
    color: "black",
  },

  button: {
    color: "black",
    fontSize: hp(1.8),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e4e4e4",
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: 8,
    fontWeight: "600",
  },
  iconTextView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(0.5),
  },
  iconView: {
    flex: 0.1,
  },
  iconText: {
    flex: 0.9,
    color: "black",
    fontWeight: "700",
    fontSize: hp(1.4),
  },
  horizontalLine: {
    height: hp(0.1),
    width: "100%",
    backgroundColor: "#e4e4e4",
    marginBottom: hp(3),
  },
  favButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  circle: {
    width: wp("5.3%"),
    height: hp("2.52%"),
    backgroundColor: "#e4e4e4",
    borderRadius: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    marginRight: wp(3),
  },
  favText: {
    color: "black",
    fontWeight: "700",
    fontSize: hp(1.6),
  },
});
