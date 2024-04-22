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
      <View>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    backgroundColor: "#EF5A22",
    padding: 15,
    gap: 8,
    shadowColor: "black",
    elevation: 3,
    justifyContent: "space-between",
  },
});

export default Tapcash;
