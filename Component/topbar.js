import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.topbar}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={{ marginLeft: "10%" }}>
          <Image source={require("../assets/icon/ic_arrow_left.png")} />
        </View>
      </TouchableOpacity>
      <Text style={{ fontSize: 16 }}>{title}</Text>
      <View style={{marginRight:40}}></View>
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
    paddingTop: "15%",
  },
});

export default TopBar;
