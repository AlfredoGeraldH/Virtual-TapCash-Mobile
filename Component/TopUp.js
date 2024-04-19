import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const TopUp = () => {
  const onPress = console.log("tekan");
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Image source={require("../assets/icon/ic_arrow_left.png")} />
        <Text style={{ fontSize: 16, fontWeight: "400" }}>Top Up TapCash</Text>
        <Image source={require("../assets/icon/ic_information.png")} />
      </View>
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
              display: "flex",
              flexDirection: "row",
              alignContent: "space-between",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <TouchableOpacity onPress={onPress}>
              <View style={styles.nominalbutton}>
                <Text>10.000</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.nominalbutton}>
                <Text>20.000</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.nominalbutton}>
                <Text>50.000</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "space-between",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <TouchableOpacity onPress={onPress}>
              <View style={styles.nominalbutton}>
                <Text>100.000</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.nominalbutton}>
                <Text>250.000</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.nominalbutton}>
                <Text>500.000</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "space-between",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <TouchableOpacity onPress={onPress}>
              <View style={styles.nominalbutton}>
                <Text>750.000</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.nominalbutton}>
                <Text>1.000.000</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.nominalbutton}>
                <Text>2.000.000</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }} />

      <View style={styles.bottombar}>
        <TouchableOpacity style={{ width: "100%", alignSelf: "" }}>
          <View style={styles.bottombutton}>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#FFF" }}>
              Selanjutnya
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#F5F9FA",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    gap: 16,
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

  bottombutton: {
    backgroundColor: "#EF5A22",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 9,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    elevation: 2,
    width: "100%",
  },

  bottombar: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F1F5",
    alignSelf: "flex-end",
  },
});

export default TopUp;
