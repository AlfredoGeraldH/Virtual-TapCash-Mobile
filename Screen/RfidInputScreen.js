import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import TopBar from "../Component/topbar";
import { TextInput } from "react-native-gesture-handler";
import FilledButton from "../Component/FilledButton";
import LightButton from "../Component/LightButton";
import { useTokenStore } from "../tokenStore";
import { useState } from "react";
import cardDataService from "../api/Services/cardService";

const RfidInputScreen = ({ navigation, route }) => {
  const token = useTokenStore((state) => state.token);
  const { virtualTapCashId } = route.params;
  const [number, onChangeNumber] = useState();
  const addCard = async () => {
    console.log("addCard kepanggil")
    const data = {
      rfid: number,
      virtualTapcashId: virtualTapCashId,
    };
    console.log(data)
    try {
      const responseCardData = await cardDataService.ScanCard2(token, data);
      console.log(responseCardData);
      if (error.response.status === 200) {
        navigation.navigate("ScanSuccessful");
      }
    } catch (error) {
      console.log(error.response.status);
      const errorMessage = error.response.data.message; // Get the error message from the response
      Alert.alert("Error", errorMessage, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      navigation.navigate("RegisterOption");
      console.log(error);
    }
  };
  
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
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Masukkan Kartu"
        ></TextInput>
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
        <TouchableOpacity
          style={{ width: "50%" }}
          onPress={() => {
            addCard()
          }
          }
        >
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
