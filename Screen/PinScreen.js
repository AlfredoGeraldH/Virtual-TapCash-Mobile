import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import TopBar from "../Component/topbar";
import { useTokenStore } from "../tokenStore";
import topUpAndWithdraw from "../api/Services/topUpAndWithdrawService";
const { width, height } = Dimensions.get("window");

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "fg", 0, "del"];
const dialPadSize = width * 0.2;
const pinLength = 6;

const PinScreen = ({ navigation, route }) => {
  const [pinCode, setPinCode] = useState([]);

  const { nominal, rekening, idCard, type, rfid, virtualTapCashId } =
    route.params;
  const pin = pinCode.join("");
  const token = useTokenStore((state) => state.token);

  const transaction = () => {
    const data = {
      cardId: idCard,
      virtual_tapcash_id: virtualTapCashId,
      nominal: nominal,
      type: type,
      pin: pin,
    };
    const response = topUpAndWithdraw
      .post(token, data)
      .then(function (response) {
        //when returns successfuly
        console.log(response);
      })
      .catch(function (error) {
        //when returns error
        console.log(error);
        Alert.alert("Error", "transkasi gagal", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      });
  };

  useEffect(() => {
    if (pinCode.length == 6) {
      transaction();
      navigation.navigate("Success");
    }
  }, [pinCode]);

  const DialPad = ({ onPress }) => {
    return (
      <View>
        <FlatList
          data={dialPad}
          numColumns={3}
          style={{ flexGrow: 1 }}
          keyExtractor={(_, index) => index.toString()}
          scrollEnabled={false}
          columnWrapperStyle={{ gap: 30 }}
          contentContainerStyle={{ gap: 30 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => onPress(item)}>
                <View
                  style={{
                    width: dialPadSize,
                    height: dialPadSize,
                    borderRadius: dialPadSize / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item === "del" ? (
                    <Ionicons
                      name="backspace-outline"
                      size={dialPadSize / 2}
                      color="black"
                    />
                  ) : item === "fg" ? (
                    <Ionicons
                      name="finger-print"
                      size={dialPadSize / 2}
                      color="black"
                    />
                  ) : (
                    <Text
                      style={{
                        fontSize: dialPadSize / 2,
                        color: "black",
                      }}
                    >
                      {item}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TopBar title="Konfirmasi Pembayaran" />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#232323",
          marginTop: 24,
          marginBottom: 8,
        }}
      >
        Masukkan PIN
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          marginBottom: 40,
          height: 30,
          alignItems: "flex-end",
        }}
      >
        {[...Array(pinLength).keys()].map((index) => {
          let isSelected;
          if (pinCode[index] == 0) {
            isSelected = true;
          } else {
            isSelected = !!pinCode[index];
          }

          return (
            <View
              key={index}
              style={{
                width: 16,
                height: 16,
                borderRadius: 16,
                backgroundColor: isSelected ? "#005E68" : "#D9D9D9",
              }}
            />
          );
        })}
      </View>
      <DialPad
        onPress={(item) => {
          if (item === "del") {
            setPinCode((prevCode) => prevCode.slice(0, prevCode.length - 1));
          } else if (typeof item === "number") {
            setPinCode((prevCode) => [...prevCode, item]);
          }
        }}
      />
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

export default PinScreen;
