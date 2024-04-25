import React, { useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    title: "10.000",
  },
  {
    id: "2",
    title: "20.000",
  },
  {
    id: "3",
    title: "50.000",
  },
  {
    id: "4",
    title: "100.000",
  },
  {
    id: "5",
    title: "250.000",
  },
  {
    id: "6",
    title: "500.000",
  },
  {
    id: "7",
    title: "750.000",
  },
  {
    id: "8",
    title: "1.000.000",
  },
  {
    id: "9",
    title: "2.000.000",
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
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#005E68" : "#FFF";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
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
          <Text style={{ fontSize: 16, fontWeight: "500" }}>My TapCash 1</Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#626262" }}>
            12345678
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "300", color: "#4E4B4B" }}>
            Saldo saat ini
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
            Rp74.000
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={{ margin: 20, flexDirection: "column", rowGap: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
            Rekening Debet
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "300", color: "#4E4B4B" }}>
            1234567
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
          navigation.navigate("ConfirmPayment");
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
