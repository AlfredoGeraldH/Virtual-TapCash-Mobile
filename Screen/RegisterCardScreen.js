import {
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import FilledButton from "../Component/FilledButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

const App = ({ navigation }) => {
  const imagePath = require("../assets/icon/ic_plus.png");

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  const onBackPress = () => {
    // navigation.navigate("Login")
    Alert.alert(
      "Keluar",
      "Kamu yakin ingin keluar?",
      [
        {
          text: "Tidak",
          onPress: () => {
            // Do nothing
          },
          style: "Ya",
        },
        { text: "YES", onPress: () => navigation.navigate("Login") },
      ],
      { cancelable: false }
    );
    return true; // Prevent default behavior
  };

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity
          onPress={() => {
            onBackPress();
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
        <Image source={require("../assets/card_image.png")} />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Belum ada TapCash Terdaftar
        </Text>
        <Text style={{ width: "80%", fontSize: 14, textAlign: "center" }}>
          Tambahkan kartu TapCash Anda untuk dapat menikmati beragam kemudahan
          Virual TapCash
        </Text>
      </View>
      {/* <View style={{ flex: 1 }} /> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RegisterOption");
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

export default App;
