import { StyleSheet, View, Text, Image } from "react-native";
import FilledButton from "../Component/FilledButton";

const LoginPopUp = () => {
  const imagePath = require("../assets/icon/ic_face.png");
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomColor: "#F0F1F5",
          borderBottomWidth: 1,
          paddingBottom: 16,
        }}
      >
        <Text style={{ fontSize: 16, color: "#232323" }}>Log In</Text>
        <Image source={require("../assets/icon/ic_cancel.png")} />
      </View>
      <View style={styles.input}>
        <Text style={styles.headline}>Username</Text>
        <Text>12345678</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.headline}>MPIN</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>*******</Text>
          <Image source={require("../assets/icon/ic_hidden.png")} />
        </View>
      </View>
      <View style={{ width: "110%" }}>
        <FilledButton buttontext={"Log In"} imagesource={imagePath} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    gap: 21,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#EAEBF1",
    backgroundColor: "#F5F9FA",
    gap: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headline: {
    fontSize: 12,
    fontWeight: "500",
    color: "#005E68",
  },
});

export default LoginPopUp;
