import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FilledButton from "../Component/FilledButton";

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

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", gap: 10 }}>
        <Image source={require("../assets/logo/logo_bni.png")} />
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
        <FilledButton />
      </View>

      <View style={{ height: 100 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
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
});

export default LoginScreen;
