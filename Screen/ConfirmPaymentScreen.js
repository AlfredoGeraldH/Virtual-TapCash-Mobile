import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TopBar from "../Component/topbar";
import FilledButton from "../Component/FilledButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const ConfirmPaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopBar title={"Konfirmasi"} />

      <View style={styles.card}>
        <View
          style={{
            margin: 20,
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "space-between",
            rowGap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#005E68",
              marginBottom: 20,
            }}
          >
            Konfirmasi Kembali
          </Text>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: 14,
              fontWeight: "300",
              color: "#4E4B4B",
            }}
          >
            <Text style={{ fontWeight: "400" }}>Jenis Transaksi</Text>
            <Text style={{ fontWeight: "300" }}>Top Up TapCash</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: 14,
              fontWeight: "300",
              color: "#4E4B4B",
            }}
          >
            <Text style={{ fontWeight: "400" }}>ID TapCash</Text>
            <Text style={{ fontWeight: "300" }}>1234 5678 9101 1121</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: 14,
              fontWeight: "300",
              color: "#4E4B4B",
            }}
          >
            <Text style={{ fontWeight: "400" }}>Nominal</Text>
            <Text style={{ fontWeight: "300" }}>Rp50.000</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: 14,
              fontWeight: "300",
              color: "#4E4B4B",
            }}
          >
            <Text style={{ fontWeight: "400" }}>Rekening Debet</Text>
            <Text style={{ fontWeight: "300" }}>123456</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }} />

      <TouchableOpacity
        onPress={() => {
          navigation.push("Pin");
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "110%",
            paddingVertical: 20,
            paddingHorizontal: 16,
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <FilledButton buttontext={"Proses ke Pembayaran"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    width: "100%",
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
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "black",
    elevation: 4,
  },

  bottombar: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
});

export default ConfirmPaymentScreen;
