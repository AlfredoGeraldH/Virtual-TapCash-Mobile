import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import FilledButton from "../Component/FilledButton";
import TopBar from "../Component/topbar";
import { TouchableOpacity } from "react-native-gesture-handler";

const WithdrawScreen = ({ navigation }) => {
  const [number, onChangeNumber] = React.useState("");
  const onPress = console.log("tekan");
  const imagePath = "";

  return (
    <View style={styles.container}>
      <TopBar title="Withdraw TapCash" />
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

      <View style={styles.warningcard}>
        <View
          style={{ margin: 20, flexDirection: "row", rowGap: 8, width: "80%" }}
        >
          <Image
            style={{ marginRight: 8 }}
            source={require("../assets/icon/ic_warning.png")}
          />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#4E4B4B" }}>
            Withdraw TapCash merupakan layanan pemindahan saldo TapCash ke
            rekening debit nasabah yang terdapat pada mobile banking
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={{ margin: 20, flexDirection: "column", rowGap: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
            Rekening Tujuan
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#4E4B4B" }}>
            1234567
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#005E68",
              marginTop: 32,
            }}
          >
            Nominal
          </Text>

          <TextInput
            style={{
              fontSize: 14,
              borderBottomColor: "#000000",
              borderBottomWidth: 0.5,
            }}
            // style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Nominal penarikan kembali saldo TapCash"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={{ flex: 1 }} />

      <TouchableOpacity
        onPress={() => {
          navigation.push("Pin");
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

  warningcard: {
    width: "90%",
    backgroundColor: "#FEF1EC",
    shadowColor: "black",
    flexDirection: "row",
    borderRadius: 8,
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

  bottombar: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
});

export default WithdrawScreen;
