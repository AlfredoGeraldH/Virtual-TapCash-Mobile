import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const CodeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Image source={require("../assets/icon/ic_arrow_left.png")} />
        <Text style={{ fontSize: 16, color: "#232323" }}>
          QR Virtual TapCash
        </Text>
        <Image source={require("../assets/icon/ic_information.png")} />
      </View>
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
      <View style={{ flex: 1 }} />
      <View
        style={{
          width: "100%",
          padding: 16,
          backgroundColor: "#FFF",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#EF5A22",
            textAlign: "center",
            borderWidth: 1,
            borderColor: "#EF5A22",
            paddingHorizontal: 18,
            paddingVertical: 16,
            borderRadius: 8,
          }}
        >
          Kembali
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FEFF",
    alignItems: "center",

    width: "100%",
    marginTop: 50,
    gap: 16,
  },

  topbar: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#FCFCFC",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F1F5",
  },
});

export default CodeScreen;
