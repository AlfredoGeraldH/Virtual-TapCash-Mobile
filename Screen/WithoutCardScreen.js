import { StyleSheet, Text, View, Image } from "react-native";
import TopBar from "../Component/topbar";
import FilledButton from "../Component/FilledButton";

const App = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={{ alignItems: "center", width: "100%" }}>
        <Image source={require("../assets/card_image.png")} />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Belum ada TapCash Terdaftar
        </Text>
        <Text style={{ width: "80%", fontSize: 14, textAlign: "center" }}>
          Tambahkan kartu TapCash Anda untuk dapat menikmati beragam kemudahan
          Virual TapCash
        </Text>
        <View style={{ margin: 10 }}></View>
        <FilledButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 150,
  },
});

export default App;
