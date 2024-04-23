<<<<<<< HEAD
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
=======
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Modal } from "react-native";
>>>>>>> baebbd10876a2c36efe19cabb6395593fba9be28
import FilledButton from "../Component/FilledButton";
import { useState } from "react";
import LoginPopUp from "./LoginPopUpScreen";

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

<<<<<<< HEAD
const renderItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={{ marginHorizontal: 18, alignItems: "center" }}>
        <Image source={item.image} />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const background = require("../assets/background.png");

=======
>>>>>>> baebbd10876a2c36efe19cabb6395593fba9be28
const LoginScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const buttonCallback = (item) => {
    if (item.id == 3) {
      console.log(`${item.name} clicked`)
      setModalVisible(true)
    }
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          buttonCallback(item)
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
<<<<<<< HEAD
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}
    >
=======
    <View style={styles.container}>
      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{flex: 1, alignItems:'center', justifyContent:'center'}}
      >
        <LoginPopUp/>
      </Modal>
>>>>>>> baebbd10876a2c36efe19cabb6395593fba9be28
      <View style={{ alignItems: "center", gap: 10 }}>
        <Image
          style={{ width: 150, height: 50 }}
          source={require("../assets/logo/logo_bni.png")}
        />
        <Text style={{ color: "#006599", fontWeight: "600" }}>
          Melayani Negeri Kebanggan Bangsa
        </Text>
      </View>
      <View></View>
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
});

export default LoginScreen;
