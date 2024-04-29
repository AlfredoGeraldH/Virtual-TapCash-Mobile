import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import FilledButton from "../Component/FilledButton";
import { createContext, useReducer, useState } from "react";
import axios from "axios";
import AccountDataService from "../api/Services/accountService";

const background = require("../assets/background.png");

const akun = [
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

const LoginScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const fetchToken = () => {
    const data = {
      username: username,
      pin: pin,
    };
    const response = AccountDataService.login(data)
      .then(function (response) {
        //when returns successfuly
        console.log(username);
        console.log(response);
        console.log(response.data);
        navigation.navigate("Home");
      })
      .catch(function (error) {
        //when returns error
        console.log("server rto");
        console.log(pin);
        console.log(error);
        Alert.alert("Error", "Username atau Password salah", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      });
  };

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

  const [username, onChangeUsername] = useState("");
  const [pin, onChangePin] = useState("");

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
                  setModalVisible(false);
                }}
              >
                <Image source={require("../assets/icon/ic_cancel.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ gap: 12 }}>
              <Text style={styles.headline2}>Username</Text>
              <View style={styles.input2}>
                <TextInput
                  style={{ width: "100%" }}
                  placeholder="Username"
                  onChangeText={onChangeUsername}
                  value={username}
                ></TextInput>
              </View>
              <Text style={styles.headline2}>MPIN</Text>
              <View style={styles.input2}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    style={{ width: "95%" }}
                    placeholder="MPIN"
                    secureTextEntry={true}
                    onChangeText={onChangePin}
                    value={pin}
                  ></TextInput>
                  <TouchableOpacity>
                    <Image source={require("../assets/icon/ic_hidden.png")} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log("Login inside modal");
                // console.log({username})
                // console.log({pin})
                // navigation.push("Home");
                fetchToken();
                setModalVisible(false);
              }}
            >
              <View style={{ width: "110%" }}>
                <FilledButton buttontext={"Log In"} />
              </View>
            </TouchableOpacity>
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
        <FilledButton buttontext={"Log In"} />
      </View>

      <View style={{ height: 100 }}>
        <FlatList
          data={akun}
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
    gap: "5%",
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
