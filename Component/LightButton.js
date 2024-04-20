import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const LightButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.font}>Nama Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF",
  },
  font: {
    fontSize: 14,
    color: "#EF5A22",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#EF5A22",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 8,
  },
});

export default LightButton;
