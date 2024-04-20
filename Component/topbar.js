import { StyleSheet, View, Text, Image } from "react-native";

const TopBar = () => {
  return (
    <View style={styles.topbar}>
      <Image source={require("../assets/icon/ic_arrow_left.png")} />
      <Text style={{ fontSize: 16 }}>NamaScreen</Text>
      <Image source={require("../assets/icon/ic_information.png")} />
    </View>
  );
};
const styles = StyleSheet.create({
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
});

export default TopBar;
