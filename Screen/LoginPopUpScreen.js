import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FilledButton from "../Component/FilledButton";
import { TextInput } from "react-native-gesture-handler";

const LoginPopUp = () => {
  const imagePath = require("../assets/icon/ic_face.png");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
        <View style={{ gap: 12 }}>
          <Text style={styles.headline}>Username</Text>
          <View style={styles.input}>
            <TextInput style={{ width: "100%" }}>12345678</TextInput>
          </View>
          <Text style={styles.headline}>MPIN</Text>
          <View style={styles.input}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput style={{ width: "95%" }}>*******</TextInput>
              <TouchableOpacity>
                <Image source={require("../assets/icon/ic_hidden.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ width: "110%" }}>
          <FilledButton buttontext={"Log In"} imagesource={imagePath} />
        </View>
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  headline: {
    fontSize: 12,
    fontWeight: "500",
    color: "#005E68",
  },
});

export default LoginPopUp;
