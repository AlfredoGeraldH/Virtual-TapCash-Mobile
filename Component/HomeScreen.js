import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const onPress = console.log("tekan");
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Image source={require("../assets/Icon/ic_arrow_left.png")} />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Virtual TapCash</Text>
        <Image source={require("../assets/Icon/ic_home.png")} />
      </View>
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
          <Text style={{ fontSize: 14, fontWeight: "500" }}>My TapCash 1</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#626262" }}>
            12345678
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "#028CEF",
          }}
        >
          Ganti Kartu
        </Text>
      </View>
      <View style={styles.card}>
        <View
          style={{
            height: 20,
            margin: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 100, height: 16 }}
            source={require("../assets/Logo/logo_tapcash.png")}
          />
          <Image
            style={{ width: 75 }}
            source={require("../assets/Logo/logo_bni_white.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontweight: 500,
            color: "#FFF",
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          Card Number
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontweight: 500,
            color: "#FFF",
            marginHorizontal: 20,
          }}
        >
          1234 5678 9101
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 12 }}>Saldo Terkini</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text style={{ fontSize: 16 }}>Rp240.000</Text>
            <Image source={require("../assets/Icon/ic_update.png")} />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.lightbutton}>
              <Text>+ Top Up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.lightbutton}>
              <Image source={require("../assets/Icon/ic_withdraw.png")} />
              <Text>Withdraw</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.pembayaran}>
        <Image style={{ width: "40%" }} source={require("../assets/krl.png")} />
        <View style={{ gap: 10 }}>
          <Text style={{ color: "#F15A23", fontSize: 14, fontWeight: "500" }}>
            Pembayaran
          </Text>
          <Text style={{ width: 192, fontSize: 12, color: "#626262" }}>
            Pembayaran KRL dan Transjakarta cukup scan QR Virtual Tapcash
          </Text>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.QRbutton}>
              <Text style={{ color: "#FFF" }}>Tampilkan QR Code</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.historyCard}>
        <Text>Riwayat Transaksi</Text>
        <Image source={require("../assets/Icon/ic_arrow_down.png")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    gap: 16,
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
  },

  card: {
    width: "90%",
    height: 203,
    borderRadius: 12,
    backgroundColor: "#F15A23",
    shadowColor: "black",
    elevation: 5,
  },

  lightbutton: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: "#005E68",
    flexDirection: "row",
  },

  pembayaran: {
    backgroundColor: "#FFF",
    width: "90%",
    padding: 16,
    gap: 16,
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "black",
    elevation: 3,
  },

  QRbutton: {
    backgroundColor: "#005E68",
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 9,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    elevation: 2,
  },

  historyCard: {
    backgroundColor: "#FFF",
    width: "90%",
    padding: 16,
    gap: 16,
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "black",
    elevation: 3,
  },
});

export default HomeScreen;
