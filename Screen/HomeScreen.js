import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import TopBar from "../Component/topbar";
import Tapcash from "../Component/TapCash";
import displayAccount from "../Utils/displayAccount";
import displayHistory from "../Utils/displayHistory";
import CardPopUp from "./CardPopUp";
import LightButton from "../Component/LightButton";

const imagePath = require("../assets/icon/ic_plus_orange.png");

const renderItem2 = ({ item }) => {
  const sampleCallback = (isi) => {
    console.log("nilai callback", isi);
  };

  return (
    <View
      style={{
        gap: 5,
        paddingHorizontal: "10%",
        paddingVertical: "5%",
        borderBottomWidth: 1,
        borderBottomColor: "#F0F1F5",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#232323" }}>
            {item?.name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#4E4B4B" }}>
            Saldo: Rp{item?.saldo}
          </Text>
        </View>
        <TouchableOpacity on>
          <View style={styles.delete2}>
            <Image source={require("../assets/icon/ic_delete.png")} />
            <Text style={{ color: "#B52E2C" }}>Hapus</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Tapcash />
    </View>
  );
};

const renderItem = ({ item }) => {
  const sampleCallback = (isi) => {
    console.log("nilai callback", isi);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 8,
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 14, color: "#232323" }}>{item.name}</Text>
        <Text style={{ fontSize: 16, color: "#005E68" }}>Rp{item.price}</Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "300", color: "#4E4B4B" }}>
        {item.date}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = console.log("Homescreen");

  const transaksi = [
    {
      id: 1,
      name: `${history && history.transaction_name}`,
      price: `${history && history.nominal}`,
      date: `${history && history.transaction_date}`,
    },
    {
      id: 2,
      name: `${history && history.transaction_name}`,
      price: `${history && history.nominal}`,
      date: `${history && history.transaction_date}`,
    },
  ];

  const tapcash = [
    {
      id: 1,
      name: `${account && account.name}`,
      saldo: `${account && account.balance}`,
    },
    {
      id: 2,
      name: `${account && account.name}`,
      saldo: `${account && account.balance}`,
    },
  ];

  const account = displayAccount();
  const history = displayHistory();

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View style={styles.container2}>
          <View style={{ height: "30%" }}></View>
          <View style={styles.card2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: "#F0F1F5",
                borderBottomWidth: 1,
                paddingBottom: 16,
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
            <View style={{ height: "60%" }}>
              <FlatList
                data={tapcash}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
              />
            </View>
            <LightButton
              imagesource={imagePath}
              buttontext={"Tambahkan Kartu"}
            />
          </View>
        </View>
      </Modal>
      <TopBar />
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {account && account.name}
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
                Rp{account && account.balance}
              </Text>
              <Image source={require("../assets/icon/ic_update.png")} />
            </View>
          </View>
        </View>

        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
      <View style={{ width: "75%" }}>
        <Tapcash />
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={onPress}>
          <View style={styles.lightbutton}>
            <Text style={{ fontSize: 12, color: "#005E68" }}>+ Top Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.lightbutton}>
            <Image source={require("../assets/icon/ic_withdraw.png")} />
            <Text style={{ fontSize: 12, color: "#005E68" }}>Withdraw</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.pembayaran}>
        <Image
          style={{ width: "40%", height: "100%" }}
          source={require("../assets/krl.png")}
        />
        <View style={{ gap: 10 }}>
          <Text style={{ color: "#F15A23", fontSize: 14, fontWeight: "500" }}>
            Pembayaran
          </Text>
          <Text style={{ width: "60%", fontSize: 12, color: "#626262" }}>
            Pembayaran KRL dan Transjakarta cukup scan QR Virtual Tapcash
          </Text>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.QRbutton}>
              <Image source={require("../assets/icon/ic_qr.png")} />
              <Text style={{ color: "#FFF" }}>Tampilkan QR Code</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

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

        <View style={{ height: 150 }}>
          <FlatList
            data={transaksi}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
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
  },

  pembayaran: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "20%",
    gap: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "black",
    elevation: 3,
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
  },

  container2: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  card2: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    gap: 21,
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
