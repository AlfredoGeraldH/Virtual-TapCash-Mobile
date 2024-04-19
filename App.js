import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "./Component/HomeScreen";

const data = [
  {
    id: 1,
    image: require("./assets/Icon/ic_wallet.png"),
    name: "E-Wallet",
  },
  {
    id: 2,
    image: require("./assets/Icon/ic_qris.png"),
    name: "Qris",
  },
  {
    id: 3,
    image: require("./assets/Icon/ic_more.png"),
    name: "Lainnya",
  },
];

const renderItem = ({ item }) => {
  const sampleCallback = (isi) => {
    console.log("nilai callback", isi);
  };
  return (
    <TouchableOpacity onPress={() => sampleCallback(item.name)}>
      <View style={{ alignItems: "center", marginHorizontal: 10 }}>
        <Image
          style={{
            width: 60,
            height: 60,
            paddingVertical: 4,
            paddingHorizontal: 15,
            margin: 10,
          }}
          source={item.image}
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      {/* <View style={{ alignItems: "center", gap: 10 }}>
        <Image source={require("./assets/logo.png")} />
        <Text style={{ color: "#006599", fontWeight: "600" }}>
          Melayani Negeri Kebanggan Bangsa
        </Text>
      </View>
      <TouchableOpacity
      // onPress={() => {
      //   signIn();
      // }}
      >
        <View
          style={{
            backgroundColor: "#FF6600",
            flexDirection: "row",
            height: 50,
            width: 295,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            margin: 50,
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>Login</Text>
          <Image source={require("./assets/ic_face.png")} />
        </View>
      </TouchableOpacity>
      <View style={{ height: 150 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
      <Image
        style={{ marginTop: 100, marginBottom: 20 }}
        source={require("./assets/help.png")}
      />
      <Text style={{ margin: 20 }}>v5.11.1</Text> */}
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
