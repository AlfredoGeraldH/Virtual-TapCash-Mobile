import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TopBar from "../Component/topbar";
import LightButton from "../Component/LightButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import QRCode from "react-native-qrcode-svg";
import { useTokenStore } from "../tokenStore";
import AccountDataService from "../api/Services/accountService";
import cardDataService from "../api/Services/cardService";
import TransactionDataService from "../api/Services/transactionService";

const CodeScreen = ({ navigation }) => {
  const [cards, setCards] = useState([]);

  const token = useTokenStore((state) => state.token);

  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const responseAccountData = await AccountDataService.get(token);
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

  const handleCloseQRCode = async () => {
    try {
      const response = await TransactionDataService.deactivateQR(
        token,
        cards.filter((card) => card.isDefault === true)[0]?.cardId
      );
      // Do something with the response, if needed
    } catch (error) {
      console.log(error);
    }
  };

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdownInterval);
          navigation.navigate("Home");
          handleCloseQRCode();
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]);

  const formatTime = (time) => {
    return time < 10 ? "0" + time : time.toString();
  };

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
          backgroundColor: "#005E68",
          paddingHorizontal: 16,
          borderRadius: 8,
          paddingVertical: 8,
          margin: 5,
        }}
      >
        <Text style={{ fontSize: 28, color: "#FFF" }}>
          {formatTime(minutes)}:{formatTime(seconds)}
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
          handleCloseQRCode(), navigation.navigate("Home");
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
