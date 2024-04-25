import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const FilledButton = ({ buttontext, imagesource }) => {
  return (
    <View style={styles.button}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {imagesource ? <Image source={imagesource} /> : <></>}
        <Text style={{ fontSize: 16, color: "white" }}>{buttontext}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#FF6600",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
});

export default FilledButton;
