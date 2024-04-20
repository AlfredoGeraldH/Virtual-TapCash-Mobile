import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import TopBar from "../Component/topbar";
import LightButton from "../Component/LightButton";

const CodeScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          marginTop: 0,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>My TapCash 1</Text>
        <Text style={{ fontSize: 14, color: "#4E4B4B" }}>12345678</Text>
      </View>
      <View
        style={{
          width: "80%",
          padding: 16,
          backgroundColor: "#FFF",
        }}
      >
        <Text style={{ fontSize: 14, color: "#4E4B4B" }}>
          Scan QR pada scanner ketika tap in dan tap out Commuter Line maupun
          TransJakarta
        </Text>
        <Image source={require("../assets/qr.png")} />
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={{ width: "100%" }}>
        <LightButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 16,
  },
});

export default CodeScreen;
