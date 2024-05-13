import {
    StyleSheet,
    Text,
    View,
    Image,
    BackHandler,
    Alert,
  } from "react-native";
  import FilledButton from "../Component/FilledButton";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import { useFocusEffect, useNavigation } from "@react-navigation/native";
  import { useCallback } from "react";
  import LightButton from "../Component/LightButton";
  import Tapcash from "../Component/TapCash";
  
  const UpdateSuccess = ({ navigation, route }) => {
    const { cardNumber, tapCashBalance } = route.params;
    const imagePath = require("../assets/icon/ic_plus.png");
  
    const currentDate = new Date();
  
    // Mendapatkan tanggal
    const date = currentDate.toLocaleDateString();
  
    // Mendapatkan waktu
    const time = currentDate.toLocaleTimeString();
    useFocusEffect(
      useCallback(() => {
        const onBackPress = () => {
          navigation.navigate("Home");
          return true;
        };
  
        BackHandler.addEventListener("hardwareBackPress", onBackPress);
  
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      }, [])
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <View style={{ marginLeft: "10%" }}>
              <Image source={require("../assets/icon/ic_arrow_left.png")} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>Update Balance</Text>
          <View style={{ marginRight: 40 }}></View>
        </View>
  
        <View
          style={{
            alignItems: "center",
            width: "100%",
            gap: 15,
            marginTop: "-20%",
          }}
        >
          <View style={{ marginLeft: "-5%" }}>
            <Tapcash rfid={cardNumber} />
          </View>
          <View style={{ alignItems: "center", gap: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Update Balance Berhasil
            </Text>
            <View style={{ flexDirection: "row", width: "80%", gap: 5 }}>
              <Text style={{ fontSize: 14, textAlign: "center" }}>Saldo:</Text>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  color: "#005E68",
                  fontWeight: "500",
                }}
              >
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(tapCashBalance)}
              </Text>
            </View>
            <Text style={{ width: "80%", fontSize: 14, textAlign: "center" }}>
              Terakhir diperbarui : {date} - {time}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
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
            <LightButton buttontext={"Kembali"} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 150,
      backgroundColor: "#F5F9FA",
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
      paddingTop: "15%",
    },
  });
  
  export default UpdateSuccess;