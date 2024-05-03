import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import TopBar from "../Component/topbar";
import { useEffect, useState } from "react";
import nfcManager, { NfcTech } from "react-native-nfc-manager";
import { TextInput } from "react-native-gesture-handler";
import FilledButton from "../Component/FilledButton";
import LightButton from "../Component/LightButton";

const RfidInputScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopBar title="Tambah TapCash" />
      <View style={{ alignItems: "center", width: "100%", gap: 12 }}>
        <Text style={{ color: "#232323", fontSize: 16, fontWeight: "500" }}>
          Masukkkan Nomor kartu TapCash
        </Text>
        <TextInput
          style={{
            paddingHorizontal: 18,
            paddingVertical: 16,
            borderWidth: 1,
            borderColor: "#C5C9DA",
            borderRadius: 8,
            backgroundColor: "#F5F9FA",
            fontSize: 14,
            color: "#4E4B4B",
            width: "80%",
          }}
        >
          Masukkan Kartu
        </TextInput>
      </View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#FFF",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <TouchableOpacity style={{ width: "50%", marginLeft: 20 }}>
          <LightButton buttontext={"Kembali"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "50%" }}>
          <FilledButton buttontext={"Selanjutnya"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 100,
  },
});

export default RfidInputScreen;
