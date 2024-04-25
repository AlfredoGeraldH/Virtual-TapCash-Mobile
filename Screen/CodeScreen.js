import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TopBar from "../Component/topbar";
import LightButton from "../Component/LightButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const CodeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopBar title="QR Virtual TapCash" />
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "110%",
            paddingVertical: 20,
            paddingHorizontal: 16,
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <LightButton buttontext={"Kembali"} />
        </View>
      </TouchableOpacity>
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
