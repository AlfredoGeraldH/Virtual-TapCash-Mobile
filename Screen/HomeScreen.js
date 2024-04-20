import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import TopBar from "../Component/topbar";
import Tapcash from "../Component/TapCash";

const transaksi = [
  {
    id: 1,
    name: "Transaksi Masuk",
    price: "10.000",
    date: "12/04/2024",
  },
  {
    id: 2,
    name: "Transaksi Keluar",
    price: "10.000",
    date: "8/04/2024",
  },
];

const renderItem = ({ item }) => {
  const sampleCallback = (isi) => {
    console.log("nilai callback", isi);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 8,
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 14, color: "#232323" }}>{item.name}</Text>
        <Text style={{ fontSize: 16, color: "#005E68" }}>Rp{item.price}</Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "300", color: "#4E4B4B" }}>
        {item.date}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  const onPress = console.log("tekan");
  return (
    <View style={styles.container}>
      <TopBar />
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>My TapCash 1</Text>
          <Text style={{ fontSize: 14, color: "#626262" }}>12345678</Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "#028CEF",
            textDecorationLine: "underline",
          }}
        >
          Ganti Kartu
        </Text>
      </View>
      <View style={{ width: "75%" }}>
        <Tapcash />
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={onPress}>
          <View style={styles.lightbutton}>
            <Text style={{ fontSize: 12, color: "#005E68" }}>+ Top Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.lightbutton}>
            <Image source={require("../assets/icon/ic_withdraw.png")} />
            <Text style={{ fontSize: 12, color: "#005E68" }}>Withdraw</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.pembayaran}>
        <Image
          style={{ width: "40%", height: "100%" }}
          source={require("../assets/krl.png")}
        />
        <View style={{ gap: 10 }}>
          <Text style={{ color: "#F15A23", fontSize: 14, fontWeight: "500" }}>
            Pembayaran
          </Text>
          <Text style={{ width: "60%", fontSize: 12, color: "#626262" }}>
            Pembayaran KRL dan Transjakarta cukup scan QR Virtual Tapcash
          </Text>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.QRbutton}>
              <Image source={require("../assets/icon/ic_qr.png")} />
              <Text style={{ color: "#FFF" }}>Tampilkan QR Code</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.historyCard}>
        <Text
          style={{
            fontSize: 16,
            borderBottomWidth: 1,
            borderBottomColor: "#F0F1F5",
            fontWeight: "500",
            width: "100%",
            padding: 10,
          }}
        >
          Riwayat Transaksi
        </Text>

        <View style={{ height: 150 }}>
          <FlatList
            data={transaksi}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 16,
  },

  lightbutton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#005E68",
    flexDirection: "row",
    backgroundColor: "#FFF",
  },

  pembayaran: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "20%",
    gap: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "black",
    elevation: 3,
  },

  QRbutton: {
    backgroundColor: "#005E68",
    width: "55%",
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 9,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    flexDirection: "row",
    elevation: 2,
  },

  historyCard: {
    backgroundColor: "#FFF",
    width: "100%",
    padding: 16,
    justifyContent: "space-between",
    shadowColor: "black",
    elevation: 2,
  },
});

export default HomeScreen;
