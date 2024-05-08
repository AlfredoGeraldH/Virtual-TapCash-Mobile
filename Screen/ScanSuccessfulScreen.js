import { StyleSheet, Text, View, Image, Alert, BackHandler } from "react-native";
import TopBar from "../Component/topbar";
import LightButton from "../Component/LightButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useCallback, useEffect } from "react";
import cardDataService from "../api/Services/cardService";
import { useTokenStore } from "../tokenStore";
import { useFocusEffect } from "@react-navigation/native";

const ScanSuccessfulScreen = ({ navigation, route }) => {
  const onBackPress = () => {
    navigation.navigate("Home")
    return true; // Prevent default behavior
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home')
          }}
        >
          <View style={{ marginLeft: "10%" }}>
            <Image source={require("../assets/icon/ic_arrow_left.png")} />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>Virtual TapCash</Text>
        <View style={{ marginRight: 40 }}></View>
      </View>
      <View style={{ alignItems: "center", width: "100%" }}>
        <Image source={require("../assets/scan_success.png")} />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          TapCash Tersimpan
        </Text>
        <Text style={{ width: "80%", fontSize: 14, textAlign: "center" }}>
          TapCash berhasil dideteksi dan telah tersimpan
        </Text>
      </View>
      {/* <View style={{ flex: 1 }}></View> */}
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
          <LightButton buttontext={"Dashboard Virtual TapCash"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 100,
    justifyContent: 'space-between'
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
    paddingTop: "15%",
  },
});

export default ScanSuccessfulScreen;
