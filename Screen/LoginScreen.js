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
  BackHandler,
} from "react-native";
import FilledButton from "../Component/FilledButton";
import { useCallback, useState } from "react";
import AuthDataService from "../api/Services/authService";
import { useTokenStore } from "../tokenStore";
import LightButton from "../Component/LightButton";
import AccountDataService from "../api/Services/accountService";
import cardDataService from "../api/Services/cardService";
import { useFocusEffect } from "@react-navigation/native";

const background = require("../assets/background.png");

const item = [
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
  const globalToken = useTokenStore((state) => state.token);
  const updateToken = useTokenStore((state) => state.updateToken);

  const [pin, setPin] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const fetchToken = () => {
    const data = {
      username: username,
      pin: pin.toString(),
    };
    const response = AuthDataService.login(data)
      .then(function (response) {
        //when returns successfuly
        updateToken("Bearer " + response.data.data);
        const localToken = "Bearer " + response.data.data;

        const fetchDataAccount = async () => {
          try {
            const responseAccountData = await AccountDataService.get(
              localToken
            );
            const responseCardData = await cardDataService.get(
              localToken,
              responseAccountData.data.data.virtualTapCashId
            );
            if (responseCardData.status == 204) {
              navigation.navigate("RegisterCard");
            } else if (responseCardData.status == 200) {
              navigation.navigate("Home");
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchDataAccount();

        setModalVisible(false);
        setIsLoading(false);
        // navigation.navigate("Home");
      })
      .catch(function (error) {
        //when returns error
        console.log(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          Alert.alert("Error", error.response.data.message, [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          // If 'error.response.data.message' doesn't exist, show a generic error message
          Alert.alert("Error", "An error occurred", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
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

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp()
        return true; // Prevent default behavior
      };
  
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [])
  );

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
                    value={pin}
                    secureTextEntry={!showPassword}
                    onChangeText={setPin}
                    keyboardType="numeric"
                  ></TextInput>
                  <TouchableOpacity
                    name={showPassword ? "eye-off" : "eye"}
                    onPress={toggleShowPassword}
                  >
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
                setIsLoading(true);
                fetchToken();
              }}
            >
              <View style={{ width: "110%" }}>
                {isLoading ? (
                  <LightButton buttontext={"Loading"} />
                ) : (
                  <FilledButton buttontext={"Log In"} />
                )}
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
          data={item}
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
