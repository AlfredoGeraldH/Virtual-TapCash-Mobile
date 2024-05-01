import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TopBar from "../Component/topbar";
import FilledButton from "../Component/FilledButton";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useTokenStore } from "../tokenStore";
import AccountDataService from "../api/Services/accountService";
import cardDataService from "../api/Services/cardService";

const DATA = [
  {
    id: "1",
    title: "10.000",
    nominal: 10000,
  },
  {
    id: "2",
    title: "20.000",
    nominal: 20000,
  },
  {
    id: "3",
    title: "50.000",
    nominal: 50000,
  },
  {
    id: "4",
    title: "100.000",
    nominal: 100000,
  },
  {
    id: "5",
    title: "250.000",
    nominal: 250000,
  },
  {
    id: "6",
    title: "500.000",
    nominal: 500000,
  },
  {
    id: "7",
    title: "750.000",
    nominal: 750000,
  },
  {
    id: "8",
    title: "1.000.000",
    nominal: 1000000,
  },
  {
    id: "9",
    title: "2.000.000",
    nominal: 2000000,
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const TopUpScreen = ({ navigation }) => {
  const [account, setAccount] = useState([]);
  const [cards, setCards] = useState([]);

  const token = useTokenStore((state) => state.token);

  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const responseAccountData = await AccountDataService.get(token);
        // console.log(responseAccountData.data);
        setAccount(responseAccountData.data);
        // console.log(responseAccountData.data.virtualTapCashId);
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

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#005E68" : "#FFF";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          price = item.title;
          nominal = item.nominal;
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <View style={styles.container}>
      <TopBar title="Top Up TapCash" />
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
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {cards.filter((card) => card.isDefault === true)[0]?.cardName}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#626262" }}>
            {cards.filter((card) => card.isDefault === true)[0]?.rfid}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "300", color: "#4E4B4B" }}>
            Saldo saat ini
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
            Rp
            {cards.filter((card) => card.isDefault === true)[0]?.tapCashBalance}
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={{ margin: 20, flexDirection: "column", rowGap: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
            Rekening Debet
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "300", color: "#4E4B4B" }}>
            {account.accountNumber}
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={{ margin: 20, flexDirection: "column", rowGap: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
            Nominal
          </Text>
          <View style={styles.warning}>
            <Image
              style={{ marginRight: 8 }}
              source={require("../assets/icon/ic_warning.png")}
            />
            <Text style={{ fontSize: 12, fontWeight: "400", color: "#4E4B4B" }}>
              Batas maksimal saldo pada kartu TapCash tidak melebihi dari
              Rp2.000.000 (2 juta rupiah)
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              numColumns={3}
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ConfirmPayment", {
            price: price,
            nominal: nominal,
            rekening: account.accountNumber,
            idCard: cards.filter((card) => card.isDefault === true)[0]?.cardId,
            virtualTapCashId: account.virtualTapCashId,
            rfid: cards.filter((card) => card.isDefault === true)[0]?.rfid,
            type: "TOPUP",
          });
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
          <FilledButton buttontext={"Selanjutnya"} />
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
  },

  card: {
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "black",
    elevation: 4,
  },

  warning: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FEF1EC",
    shadowColor: "black",
    elevation: 1,
    flexDirection: "row",
  },

  nominalbutton: {
    paddingVertical: 9,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#005E68",
    width: 96,
    fontSize: 14,
  },

  bottombar: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
  },

  item: {
    width: "28%",
    height: 46,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#005E68",
  },
  title: {
    fontSize: 14,
  },
});

export default TopUpScreen;
