import { StyleSheet, Text, View, Image } from "react-native";
import TopBar from "../Component/topbar";
import LightButton from "../Component/LightButton";

const ScanSuccessfulScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={{ alignItems: "center", width: "100%" }}>
        <Image source={require("../assets/scan_success.png")} />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          TapCash Tersimpan
        </Text>
        <Text style={{ width: "80%", fontSize: 14, textAlign: "center" }}>
          TapCash berhasil dideteksi dan telah tersimpan
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={{ width: "100%" }}>
        <LightButton buttontext={"Dashboard Virtual TapCash"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 100,
  },
});

export default ScanSuccessfulScreen;
