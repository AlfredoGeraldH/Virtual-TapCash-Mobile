import { StyleSheet, Text, View, Image } from "react-native";
import TopBar from "../Component/topbar";

const ScanCardScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar title="Virtual TapCash" />
      <View style={{ alignItems: "center", width: "100%" }}>
        <Image source={require("../assets/card_scan.png")} />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Memindai TapCash
        </Text>
        <Text style={{ width: "80%", fontSize: 14, textAlign: "center" }}>
          Tempelkan kartu TapCash pada bagian belakang perangkat Anda yang
          memiliki konektivitas NFC
        </Text>
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

export default ScanCardScreen;
