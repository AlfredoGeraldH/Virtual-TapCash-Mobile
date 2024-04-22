import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const LightButton = ({ buttontext, imagesource }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: "#EF5A22",
        paddingHorizontal: 18,
        paddingVertical: 16,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row", gap: 8 }}>
        {imagesource ? <Image source={imagesource} /> : <></>}
        <Text style={styles.font}>{buttontext}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 14,
    color: "#EF5A22",
    textAlign: "center",
  },
});

export default LightButton;
