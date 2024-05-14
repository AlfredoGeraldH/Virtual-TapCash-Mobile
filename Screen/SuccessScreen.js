import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, BackHandler } from "react-native";
import LightButton from "../Component/LightButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTokenStore } from "../tokenStore";
import TransactionDataService from "../api/Services/transactionService";
import { useFocusEffect } from "@react-navigation/native";

const SuccessScreen = ({ navigation, route }) => {
  const { nominal, rekening, idCard, rfid, type } = route.params;

  const token = useTokenStore((state) => state.token);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

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
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: 24,
          rowGap: 8,
        }}
      >
        {type == "TOPUP" ? (
          <>
            <Image source={require("../assets/icon/ic_success1.png")} />
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
              Top Up TapCash Berhasil
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#4E4B4B" }}>
              Saldo TapCash otomatis bertambah
            </Text>
          </>
        ) : (
          <>
            <Image source={require("../assets/icon/ic_success.png")} />
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
              Withdraw TapCash Berhasil
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#4E4B4B" }}>
              Saldo TapCash otomatis berkurang
            </Text>
          </>
        )}
      </View>
      <View style={styles.card}>
        <View
          style={{
            margin: 20,
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "space-between",
            rowGap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#005E68",
              marginBottom: 20,
            }}
          >
            Detail Transaksi
          </Text>

          <View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Jenis Transaksi</Text>
            <Text style={{ fontWeight: "300" }}>{type}</Text>
          </View>

          <View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Tanggal</Text>
            <Text style={{ fontWeight: "300" }}>{currentDate}</Text>
          </View>

          <View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>ID TapCash</Text>
            <Text style={{ fontWeight: "300" }}>{rfid}</Text>
          </View>

          <View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Nominal</Text>
            <Text style={{ fontWeight: "300" }}>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(nominal)}
            </Text>
          </View>

          <View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Rekening Debet</Text>
            <Text style={{ fontWeight: "300" }}>{rekening}</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }} />

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
    display: "flex",
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 16,
    paddingTop: "30%",
    backgroundColor: "#F5F9FA",
  },

  card: {
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "black",
    elevation: 4,
  },

  cardinnertext: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
    fontWeight: "300",
    color: "#4E4B4B",
  },
});

export default SuccessScreen;
