import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ImageBackground,
  TextInput
} from "react-native";
import FilledButton from "../Component/FilledButton";
import { useState } from "react";
import LoginPopUp from "./LoginPopUpScreen";

const background = require("../assets/background.png");

const data = [
  {
    id: 1,
    image: require("../assets/icon/ic_wallet.png"),
    name: "E-Wallet",
  },
  {
    id: 2,
    image: require("../assets/icon/ic_qris.png"),
    name: "Qris",
  },
  {
    id: 3,
    image: require("../assets/icon/ic_tapcash.png"),
    name: "TapCash",
  },
  {
    id: 4,
    image: require("../assets/icon/ic_more.png"),
    name: "Lainnya",
  },
];

const LoginScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const buttonCallback = (item) => {
    if (item.id == 3) {
      console.log(`${item.name} clicked`);
      setModalVisible(true);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          buttonCallback(item);
        }}
      >
        <View style={{ marginHorizontal: 18, alignItems: "center" }}>
          <Image source={item.image} />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const imagePath = require("../assets/icon/ic_face.png");
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          }}
        >
          <View style={styles.card2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: "#F0F1F5",
                borderBottomWidth: 1,
                paddingBottom: 16,
              }}
            >
              <Text style={{ fontSize: 16, color: "#232323" }}>Log In</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false)
                }}
              >
                <Image source={require("../assets/icon/ic_cancel.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ gap: 12 }}>
              <Text style={styles.headline2}>Username</Text>
              <View style={styles.input2}>
                <TextInput style={{ width: "100%" }}>12345678</TextInput>
              </View>
              <Text style={styles.headline2}>MPIN</Text>
              <View style={styles.input2}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput style={{ width: "95%" }}>*******</TextInput>
                  <TouchableOpacity>
                    <Image source={require("../assets/icon/ic_hidden.png")} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ width: "110%" }}>
              <FilledButton buttontext={"Log In"} imagesource={imagePath} />
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ alignItems: "center", gap: 10 }}>
        <Image
          style={{ width: 150, height: 50 }}
          source={require("../assets/logo/logo_bni.png")}
        />
        <Text style={{ color: "#006599", fontWeight: "600" }}>
          Melayani Negeri Kebanggan Bangsa
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: "5%",
        }}
      >
        <FilledButton buttontext={"Log In"} imagesource={imagePath} />
      </View>

      <View style={{ height: 100 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-10%",
    gap: 20,
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 20,
  },

  card2: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    gap: 21,
  },
  input2: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#EAEBF1",
    backgroundColor: "#F5F9FA",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  headline2: {
    fontSize: 12,
    fontWeight: "500",
    color: "#005E68",
  },
});

export default LoginScreen;
