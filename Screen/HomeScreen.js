import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
  BackHandler,
} from "react-native";
import TopBar from "../Component/topbar";
import Tapcash from "../Component/TapCash";
import LightButton from "../Component/LightButton";
import AccountDataService from "../api/Services/accountService";
import cardDataService from "../api/Services/cardService";
import TransactionDataService from "../api/Services/transactionService";
import { useTokenStore } from "../tokenStore";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";

const imagePath = require("../assets/icon/ic_plus_orange.png");

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 14, color: "#232323" }}>{item?.type}</Text>
        <Text style={{ fontSize: 16, color: "#005E68" }}>
          {item?.type == "TOPUP" ? (
            <Text style={{ fontSize: 16, color: "#005E68" }}>
              +{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(item?.nominal)}
            </Text>
          ) : (
            <Text style={{ fontSize: 16, color: "#EF5A22" }}>
              -{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(item?.nominal)}
            </Text>
          )}
        </Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "300", color: "#4E4B4B" }}>
        {moment(item?.createdAt).format("DD/MM/YY")}
      </Text>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cards, setCards] = useState([]);
  const [account, setAccount] = useState({});
  const [transactions, setTransactions] = useState([]);

  const globalToken = useTokenStore((state) => state.token);
  const token = globalToken;

  const renderItem2 = ({ item }) => {
    return (
      <View
        style={{
          gap: 10,
          paddingHorizontal: "10%",
          paddingVertical: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#F0F1F5",
          backgroundColor: item?.isDefault == true ? "#f5f2f2" : "#FFF",
        }}
      >
        {item?.isDefault === true ? (
          <Text
            style={{
              textAlign: "center",
              color: "#005e68",
              fontWeight: "500",
              fontSize: 20,
            }}
          >
            - Active Card -
          </Text>
        ) : (
          ""
        )}

        <View style={{ gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              marginLeft: "5%",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: "#232323" }}
              >
                {item?.cardName}
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "400", color: "#4E4B4B" }}
              >
                Saldo:{" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(item?.tapCashBalance)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PinRemoveCard", {
                  idUser: item?.user.userId,
                  idCard: item?.cardId,
                });
                setModalVisible(false);
              }}
            >
              <View style={styles.delete2}>
                <Image source={require("../assets/icon/ic_delete.png")} />
                <Text style={{ color: "#B52E2C" }}>Hapus</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              changeCard(item?.cardId);
              setModalVisible(false);
            }}
          >
            <Tapcash rfid={item?.rfid} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const changeCard = (idCard) => {
    const data = {
      cardId: idCard,
    };
    const response = cardDataService
      .changeCard(token, data)
      .then(function (response) {
        //when returns successfuly
        onRefresh();
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
    const fetchDataAccount = async () => {
      try {
        const responseAccountData = await AccountDataService.get(token);
        const responseCardData = await cardDataService.get(
          token,
          responseAccountData.data.data.virtualTapCashId
        );
        setCards(responseCardData.data.data);
        setAccount(responseAccountData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAccount();
  }, []);

  useEffect(() => {
    const fetchTransactionData = async (virtualTapCashId, cardId) => {
      try {
        const responseTransactionData = await TransactionDataService.get(
          token,
          virtualTapCashId,
          cardId
        );
        setTransactions(responseTransactionData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransactionData(
      cards.filter((card) => card.isDefault === true)[0]?.user.virtualTapCashId,
      cards.filter((card) => card.isDefault === true)[0]?.cardId
    );
  }, [cards, account]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTransactions([]);
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
    const fetchTransactionData = async (virtualTapCashId, cardId) => {
      try {
        const responseTransactionData = await TransactionDataService.get(
          token,
          virtualTapCashId,
          cardId
        );
        setTransactions(responseTransactionData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransactionData(
      cards.filter((card) => card.isDefault === true)[0]?.user.virtualTapCashId,
      cards.filter((card) => card.isDefault === true)[0]?.cardId
    );
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      onRefresh();
    }, [])
  );

  const handleOpenQRCode = async () => {
    try {
      const response = await TransactionDataService.activateQR(
        token,
        cards.filter((card) => card.isDefault === true)[0]?.cardId
      );
      // Do something with the response, if needed
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  const onBackPress = () => {
    // navigation.navigate("Login")
    Alert.alert(
      "Keluar",
      "Kamu yakin ingin keluar?",
      [
        {
          text: "Tidak",
          onPress: () => {
            // Do nothing
          },
          style: "Ya",
        },
        { text: "YES", onPress: () => navigation.navigate("Login") },
      ],
      { cancelable: false }
    );
    return true; // Prevent default behavior
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.container2}>
          <View style={styles.card2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: "#F0F1F5",
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{ fontSize: 16, color: "#232323", fontWeight: "500" }}
              >
                TapCash Anda
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Image source={require("../assets/icon/ic_cancel.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ height: "74%" }}>
              <FlatList
                data={cards}
                renderItem={renderItem2}
                keyExtractor={(item) => item.cardId}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("RegisterOption");
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
                <LightButton
                  imagesource={imagePath}
                  buttontext={"Tambah Kartu"}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.topbar}>
        <TouchableOpacity
          onPress={() => {
            onBackPress();
          }}
        >
          <View style={{ marginLeft: "10%" }}>
            <Image source={require("../assets/icon/ic_arrow_left.png")} />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>Virtual TapCash</Text>
        <View style={{ marginRight: 40 }}></View>
      </View>

      <View>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            paddingHorizontal: 16,
            gap: 16,
            // height: "100%",
            width: "100%",
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View
            style={{
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {cards.filter((card) => card.isDefault === true)[0]?.cardName}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#4E4B4B", fontSize: 12 }}>Saldo</Text>
                <Text style={{ color: "#4E4B4B", fontSize: 16 }}>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(
                    cards.filter((card) => card.isDefault === true)[0]
                      ?.tapCashBalance
                  )}
                </Text>
                <TouchableOpacity onPress={() => onRefresh()}>
                  <Image source={require("../assets/icon/ic_update.png")} />
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "#028CEF",
                textDecorationLine: "underline",
              }}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              Ganti Kartu
            </Text>
          </View>
          <View style={{ marginLeft: "-7%" }}>
            <Tapcash
              rfid={cards.filter((card) => card.isDefault === true)[0]?.rfid}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("TopUp");
                setModalVisible(false);
                navigation.push("TopUp");
              }}
            >
              <View style={styles.lightbutton}>
                <Text style={{ fontSize: 12, color: "#005E68" }}>+ Top Up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log("Withdraw");
                setModalVisible(false);
                navigation.push("Withdraw");
              }}
            >
              <View style={styles.lightbutton}>
                <Image source={require("../assets/icon/ic_withdraw.png")} />
                <Text style={{ fontSize: 12, color: "#005E68" }}>Withdraw</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log("Update");
                setModalVisible(false);
                navigation.push("UpdateScan");
              }}
            >
              <View style={styles.lightbutton}>
                <Image source={require("../assets/icon/ic_saldo.png")} />
                <Text style={{ fontSize: 12, color: "#005E68" }}>Update Saldo</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.pembayaran}>
            <Image
              style={{ width: "40%", height: "100%" }}
              source={require("../assets/krl.png")}
            />
            <View style={{ gap: 10 }}>
              <Text
                style={{ color: "#F15A23", fontSize: 14, fontWeight: "500" }}
              >
                Pembayaran
              </Text>
              <Text style={{ width: "60%", fontSize: 12, color: "#626262" }}>
                Pembayaran KRL dan Transjakarta cukup scan QR Virtual Tapcash
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.push("Code");
                  handleOpenQRCode();
                }}
              >
                <View style={styles.QRbutton}>
                  <Image source={require("../assets/icon/ic_qr.png")} />
                  <Text style={{ color: "#FFF" }}>Tampilkan QR Code</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.historyCard}>
        <Text
          style={{
            fontSize: 16,
            borderBottomWidth: 1,
            borderBottomColor: "#F0F1F5",
            fontWeight: "500",
            width: "100%",
            padding: 10,
          }}
        >
          Riwayat Transaksi
        </Text>

        <View style={{ height: 180 }}>
          {transactions.length === 0 ? (
            <Text
              style={{
                textAlign: "center",
                margin: 10,
                color: "#F15A23",
                fontWeight: "500",
              }}
            >
              Belum Ada Transaksi
            </Text>
          ) : (
            <FlatList
              data={transactions.slice(0, 10)}
              renderItem={renderItem}
              keyExtractor={(item) => item.transactionId}
            />
          )}
        </View>
      </View>
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

  container2: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
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

  lightbutton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#005E68",
    flexDirection: "row",
    backgroundColor: "#FFF",
    width: 110,
    justifyContent: "center",
  },

  pembayaran: {
    backgroundColor: "#FFF",
    padding: 16,
    width: "110%",
    height: "30%",
    gap: 20,
    flexDirection: "row",
    shadowColor: "black",
    elevation: 3,
    alignItems: "center",
  },

  QRbutton: {
    backgroundColor: "#005E68",
    width: "55%",
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 9,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    flexDirection: "row",
    elevation: 2,
  },

  historyCard: {
    backgroundColor: "#FFF",
    width: "100%",
    padding: 16,
    justifyContent: "space-between",
    shadowColor: "black",
    elevation: 2,
    marginTop: "-100%",
  },

  card2: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    gap: 21,
    marginTop: "50%",
  },

  headline2: {
    fontSize: 12,
    fontWeight: "500",
    color: "#005E68",
  },

  delete2: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#B52E2C",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 9,
    gap: 4,
  },
});

export default HomeScreen;