import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TopBar from "../Component/topbar";
import LightButton from "../Component/LightButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import QRCode from "react-native-qrcode-svg";
import { useTokenStore } from "../tokenStore";
import AccountDataService from "../api/Services/accountService";
import cardDataService from "../api/Services/cardService";

const CodeScreen = ({ navigation }) => {
  const [cards, setCards] = useState([]);

  const token = useTokenStore((state) => state.token);
  console.log("CodeScreen, token:" + token);

  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const responseAccountData = await AccountDataService.get(token);
        // console.log(responseAccountData.data);
        // console.log(responseAccountData.data.virtualTapCashId);
        const responseCardData = await cardDataService.get(
          token,
          responseAccountData.data.virtualTapCashId
        );
        setCards(responseCardData.data);
        // console.log(responseCardData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAccount();
  }, []);

  return (
    <View style={styles.container}>
      <TopBar title="QR Virtual TapCash" />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          marginTop: 0,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          {cards.filter((card) => card.isDefault === true)[0]?.cardName}
        </Text>
        <Text style={{ fontSize: 14, color: "#4E4B4B" }}>
          {cards.filter((card) => card.isDefault === true)[0]?.rfid}
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          padding: 16,
          backgroundColor: "#FFF",
        }}
      >
        <Text style={{ fontSize: 14, color: "#4E4B4B" }}>
          Scan QR pada scanner ketika tap in dan tap out Commuter Line maupun
          TransJakarta
        </Text>
        {/* <Image source={require("../assets/qr.png")} /> */}
        <QRCode
          value={cards.filter((card) => card.isDefault === true)[0]?.cardId}
          size={300}
          color="black"
          backgroundColor="white"
        />
      </View>
      <View style={{ flex: 1 }}></View>
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
    alignItems: "center",
    width: "100%",
    gap: 16,
  },
});

export default CodeScreen;
