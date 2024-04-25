import { StyleSheet, Text, View, Image } from "react-native";
import TopBar from "../Component/topbar";
import FilledButton from "../Component/FilledButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const App = ({ navigation }) => {
  const imagePath = require("../assets/icon/ic_plus.png");

  return (
    <View style={styles.container}>
      <TopBar title="Virtual TapCash" />
      <View style={{ alignItems: "center", width: "100%" }}>
        <Image source={require("../assets/card_image.png")} />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Belum ada TapCash Terdaftar
        </Text>
        <Text style={{ width: "80%", fontSize: 14, textAlign: "center" }}>
          Tambahkan kartu TapCash Anda untuk dapat menikmati beragam kemudahan
          Virual TapCash
        </Text>
      </View>
      <View style={{ flex: 1 }} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ScanCard");
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
          <FilledButton imagesource={imagePath} buttontext={"Tambah Kartu"} />
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
    justifyContent: "space-between",
    gap: 150,
  },
});

export default App;
