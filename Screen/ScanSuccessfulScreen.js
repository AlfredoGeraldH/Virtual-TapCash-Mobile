import { StyleSheet, Text, View, Image } from "react-native";
import TopBar from "../Component/topbar";
import LightButton from "../Component/LightButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const ScanSuccessfulScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopBar title="Virtual TapCash" />
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
  },
});

export default ScanSuccessfulScreen;
