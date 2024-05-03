import { StyleSheet, Text, View, Image } from "react-native";
import TopBar from "../Component/topbar";
import { useEffect, useState } from "react";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { useTokenStore } from "../tokenStore";
import AccountDataService from "../api/Services/accountService";
import cardDataService from "../api/Services/cardService";

NfcManager.start();

const ScanCardScreen = ({ navigation, route }) => {
  const { virtualTapCashId } = route.params;
  console.log(virtualTapCashId);
  const [nfcData, setNfcData] = useState("");

  const readNdef = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      // console.warn("Tag found", tag);
      setNfcData(tag.id);
      navigation.navigate("ScanSuccessful", {
        cardId: tag.id,
        virtualTapCashId: virtualTapCashId,
      });
    } catch (ex) {
      // console.warn("Oops!", ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  readNdef();

  console.log(nfcData);

  return (
    <View style={styles.container}>
      <TopBar title="Virtual TapCash" />
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

export default ScanCardScreen;
