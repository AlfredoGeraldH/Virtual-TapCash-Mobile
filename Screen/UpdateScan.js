import { StyleSheet, Text, View, Image, Alert, Button } from "react-native";
import TopBar from "../Component/topbar";
import { useEffect, useState } from "react";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { useTokenStore } from "../tokenStore";
import AccountDataService from "../api/Services/accountService";
import cardDataService from "../api/Services/cardService";
import { TouchableOpacity } from "react-native-gesture-handler";
import FilledButton from "../Component/FilledButton";

NfcManager.start();

const UpdateScan = ({ navigation, route }) => {
  const [nfcData, setNfcData] = useState();
  const token = useTokenStore((state) => state.token);
  const [cards, setCards] = useState([]);
  const [succesScan, setSuccessScan] = useState(false);

  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const responseAccountData = await AccountDataService.get(token);
        const responseCardData = await cardDataService.get(
          token,
          responseAccountData.data.data.virtualTapCashId
        );
        setCards(responseCardData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAccount();
  }, []);

  const readNdef = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      //   console.warn("Tag found", tag);
      const currentTagId = tag.id; // Store the tag ID in a variable
      setNfcData(currentTagId); // Update the state for other uses and future re-renders

      // Use the currentTagId directly in your check
      if (
        currentTagId ==
        cards.filter((card) => card.isDefault === true)[0]?.cardId
      ) {
        console.log("Scan", currentTagId);
        navigation.navigate("UpdateSuccess", {
          cardNumber: cards.filter((card) => card.isDefault === true)[0]?.rfid,
          tapCashBalance: cards.filter((card) => card.isDefault === true)[0]
            ?.tapCashBalance,
        });
      } else {
        console.log("else", currentTagId);
        const error2 = "Silahkan Ganti Kartu";
        Alert.alert("Kartu salah", error2, [
          { text: "OK", onPress: () => {
            console.log("OK Pressed")
            setSuccessScan(false)
          } },
        ]);
      }
    } catch (ex) {
      //   console.warn("Oops!", ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  console.log(cards.filter((card) => card.isDefault === true)[0]?.cardId);

  return (
    <View style={styles.container}>
      <TopBar title="Update Balance" />

      {succesScan === false ? (
        <View
          style={{
            backgroundColor: "#FF6600",
            width: "90%",
            marginTop: "50%",
            paddingLeft: "10%",
            borderRadius: 10,
            height: "10%",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              readNdef();
              setSuccessScan(true);
            }}
          >
            <FilledButton buttontext={"Scan Card"} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ alignItems: "center", width: "100%" }}>
          <Image source={require("../assets/card_scan.png")} />
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Memindai TapCash
          </Text>
          <Text style={{ width: "80%", fontSize: 14, textAlign: "center" }}>
            Tempelkan kartu TapCash pada bagian belakang perangkat Anda yang
            memiliki konektivitas NFC
          </Text>
        </View>
      )}
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

export default UpdateScan;