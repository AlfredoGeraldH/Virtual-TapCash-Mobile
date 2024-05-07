import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  BackHandler,
} from "react-native";
import TopBar from "../Component/topbar";
import LightButton from "../Component/LightButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useCallback, useEffect } from "react";
import cardDataService from "../api/Services/cardService";
import { useTokenStore } from "../tokenStore";
import { useFocusEffect } from "@react-navigation/native";

const ScanSuccessfulScreen = ({ navigation, route }) => {
  const token = useTokenStore((state) => state.token);
  const { virtualTapCashId, cardId } = route.params;
  useEffect(() => {
    const data = {
      cardId: cardId,
      virtualTapcashId: virtualTapCashId,
    };
    const addCard = async () => {
      try {
        const responseCardData = await cardDataService.ScanCard(token, data);
        console.log(responseCardData);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          // Extract error message from response
          const errorMessage = error.response.data.message;
          navigation.navigate("RegisterOption");
          Alert.alert("Error", errorMessage, [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          console.log("An unexpected error occurred:", error);
        }
      }
    };
    addCard();
  }, []);

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
      <TopBar title="Virtual TapCash" />
      <View style={{ alignItems: "center", width: "100%" }}>
        <Image source={require("../assets/scan_success.png")} />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          TapCash Tersimpan
        </Text>
        <Text style={{ width: "80%", fontSize: 14, textAlign: "center" }}>
          TapCash berhasil dideteksi dan telah tersimpan
        </Text>
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
          <LightButton buttontext={"Dashboard Virtual TapCash"} />
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
    gap: 100,
  },
});

export default ScanSuccessfulScreen;
