import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const Tapcash = () => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image source={require("../assets/logo/logo_tapcash.png")} />
        <Image source={require("../assets/logo/logo_bni_white.png")} />
      </View>
      <Text
        style={{
          fontSize: 10,
          color: "#FFF",
          letterSpacing: 1,
        }}
      >
        CARD NUMBER
      </Text>
      <Text
        style={{
          fontSize: 16,
          letterSpacing: 0.5,
          color: "#FFF",
        }}
      >
        1234 5678 9101
      </Text>
      <View>
        <Text style={{ fontSize: 12, color: "#FFF", letterSpacing: 1 }}>
          SALDO
        </Text>
        <View style={{ color: "#FFF", flexDirection: "row", gap: 8 }}>
          <Text style={{ fontSize: 16, color: "#FFF" }}>Rp240.000</Text>
          <TouchableOpacity>
            <Image source={require("../assets/icon/ic_update.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#EF5A22",
    padding: 15,
    gap: 8,
    shadowColor: "black",
    elevation: 3,
  },
});

export default Tapcash;
