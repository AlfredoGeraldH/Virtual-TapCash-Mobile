import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import TopBar from "../Component/topbar";
import { useTokenStore } from "../tokenStore";
import cardDataService from "../api/Services/cardService";
import AccountDataService from "../api/Services/accountService";

const { width, height } = Dimensions.get("window");

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "fg", 0, "del"];
const dialPadSize = width * 0.2;
const pinLength = 6;

const PinRemoveCardScreen = ({ navigation, route }) => {
  const [pinCode, setPinCode] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const [cards, setCards] = useState([]);
  const [navigationDestination, setNavigationDestination] = useState(null);

  const { idUser, idCard } = route.params;

  const pin = pinCode.join("");
  const token = useTokenStore((state) => state.token);

  const transaction = async () => {
    const data = {
      userId: idUser,
      cardId: idCard,
      pin: pin,
    };

    setIsLoading(true); // Set isLoading to true before making the API call

    try {
      const response = await cardDataService.removeCard(token, data);
      fetchDataAccount();
      Alert.alert("Berhasil", "Kartu Berhasil Dihapus", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } catch (error) {
      //when returns error
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        Alert.alert("Error", error.response.data.message, [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      } else {
        // If 'error.response.data.message' doesn't exist, show a generic error message
        Alert.alert("Error", "An error occurred", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } finally {
      setIsLoading(false); // Set isLoading to false after the API call is completed
    }
  };

  const fetchDataAccount = async () => {
    try {
      const responseAccountData = await AccountDataService.get(token);
      const responseCardData = await cardDataService.get(
        token,
        responseAccountData.data.data.virtualTapCashId
      );
      setCards(responseCardData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (pinCode.length == 6) {
      transaction();
    }
  }, [pinCode]);

  useEffect(() => {
    if (cards.status === 204) {
      setNavigationDestination("RegisterCard");
    } else if (cards.status === 200) {
      setNavigationDestination("Home");
    }
  }, [cards]);

  useEffect(() => {
    if (navigationDestination) {
      navigation.navigate(navigationDestination);
    }
  }, [navigationDestination]);

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
      <TopBar title="Hapus Kartu" />
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

      {/* Loading popup */}
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 16,
    backgroundColor: "#F5F9FA",
  },
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999, // Ensure the loading popup is on top of other components
  },
});

export default PinRemoveCardScreen;
