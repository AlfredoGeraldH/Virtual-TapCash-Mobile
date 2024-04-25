import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Tapcash from "../Component/TapCash";
import LightButton from "../Component/LightButton";
import displayAccount from "../Utils/displayAccount";
import {
  Link,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";

const renderItem = ({ item }) => {
  const sampleCallback = (isi) => {
    console.log("nilai callback", isi);
  };

  return (
    <View
      style={{
        gap: 5,
        paddingHorizontal: "10%",
        paddingVertical: "5%",
        borderBottomWidth: 1,
        borderBottomColor: "#F0F1F5",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#232323" }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#4E4B4B" }}>
            Saldo: Rp{item.saldo}
          </Text>
        </View>
        <TouchableOpacity on>
          <View style={styles.delete}>
            <Image source={require("../assets/icon/ic_delete.png")} />
            <Text style={{ color: "#B52E2C" }}>Hapus</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Tapcash />
    </View>
  );
};

const CardPopUp = () => {
  const navigation = useNavigation();
  const imagePath = require("../assets/icon/ic_plus_orange.png");

  const account = displayAccount();

  const tapcash = [
    {
      id: 1,
      name: `${account && account.data.first_name}`,
      saldo: `${account && account.data.last_name}`,
    },
    {
      id: 2,
      name: `${account && account.data.first_name}`,
      saldo: `${account && account.data.last_name}`,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ height: "30%" }}></View>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomColor: "#F0F1F5",
            borderBottomWidth: 1,
            paddingBottom: 16,
          }}
        >
          <Text style={{ fontSize: 16, color: "#232323", fontWeight: "500" }}>
            TapCash Anda
          </Text>
          <TouchableOpacity
            onPress={() => {
              modalVisibleState = true;
            }}
          >
            <Image source={require("../assets/icon/ic_cancel.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ height: "60%" }}>
          <FlatList
            data={tapcash}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <LightButton imagesource={imagePath} buttontext={"Tambahkan Kartu"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  card: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    gap: 21,
  },

  headline: {
    fontSize: 12,
    fontWeight: "500",
    color: "#005E68",
  },

  delete: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#B52E2C",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 9,
    gap: 4,
  },
});

export default CardPopUp;
