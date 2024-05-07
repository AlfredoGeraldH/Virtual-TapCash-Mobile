import { Image, StyleSheet, Text, View } from "react-native";
import TopBar from "../Component/topbar";
import { TouchableOpacity } from "react-native-gesture-handler";
import LightButton from "../Component/LightButton";
import { useEffect, useState } from "react";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import AccountDataService from "../api/Services/accountService";
import { useTokenStore } from "../tokenStore";

const RegisterOptionScreen = ({ navigation }) => {
  const token = useTokenStore((state) => state.token);
  const [virtualTapCashId, setVirtualTapcashId] = useState("");
  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const responseAccountData = await AccountDataService.get(token);
        setVirtualTapcashId(responseAccountData.data.data.virtualTapCashId);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAccount();
  }, []);

  return (
    <View style={styles.container}>
      <TopBar title="Virtual TapCash" />

      <View style={{ alignItems: "center", gap: 16 }}>
        <Text style={{ color: "#232323", fontSize: 16, fontWeight: 500 }}>
          Pilih metode penambahan TapCash
        </Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("ScanCard", {
              virtualTapCashId: virtualTapCashId,
            })
          }
        >
          <Image
            style={{ flex: 1, height: 64, width: 64, margin: 8 }}
            source={require("../assets/icon/ic_option_nfc.png")}
          />
          <View style={{ flex: 5 }}>
            <Text style={{ color: "#005E68", fontWeight: 500, fontSize: 16 }}>
              NFC
            </Text>
            <Text style={{ color: "#4E4B4B", fontWeight: 400, fontSize: 12 }}>
              Tempelkan kartu TapCash Anda pada perangkat. Pastikan perangkat
              memiliki konektifitas NFC.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("RfidInput", {
              virtualTapCashId: virtualTapCashId,
            })
          }
        >
          <Image
            style={{ flex: 1, height: 64, width: 64, margin: 8 }}
            source={require("../assets/icon/ic_option_manual.png")}
          />
          <View style={{ flex: 5 }}>
            <Text style={{ color: "#005E68", fontWeight: 500, fontSize: 16 }}>
              Input Manual
            </Text>
            <Text style={{ color: "#4E4B4B", fontWeight: 400, fontSize: 12 }}>
              Tempelkan kartu TapCash Anda pada perangkat. Pastikan perangkat
              memiliki konektifitas NFC.
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={{ flex: 1 }}></View> */}
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
    justifyContent: "space-between",
    width: "100%",
    gap: 16,
  },
  card: {
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    padding: 16,
    gap: 8,
    elevation: 1,
  },
});

export default RegisterOptionScreen;
