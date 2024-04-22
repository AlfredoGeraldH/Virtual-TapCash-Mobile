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

const tapcash = [
  {
    id: 1,
    name: "My Tapcash 1",
    saldo: "74.000",
  },
  {
    id: 2,
    name: "My Tapcash 2",
    saldo: "74.000",
  },
];

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
        <TouchableOpacity>
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
  const imagePath = require("../assets/icon/ic_plus_orange.png");
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
          <Image source={require("../assets/icon/ic_cancel.png")} />
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
