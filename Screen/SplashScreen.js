import { StyleSheet, Text, View, Image } from "react-native";
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", gap: 8 }}>
        <Image source={require("../assets/logo/logo_bni.png")} />
        <Text style={{ fontSize: 14, color: "#005E68", fontWeight: "500" }}>
          Melayani Negeri Kebanggaan Bangsa
        </Text>
      </View>
      <View style={{ width: "70%", alignItems: "center", gap: 8 }}>
        <Image source={require("../assets/logo/logo_lps.png")} />
        <Text style={styles.font}>
          PT Bank Negara Indonesia (Persero) Tbk. berizin dan diawasi oleh
          Otoritas Jasa Keuangan (OJK) serta merupakan peserta penjaminan
          Lembaga Penjamin Simpanan (LPS)
        </Text>
        <Text style={styles.font}>v5.11.1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 400,
    margin: "-10%",
  },

  font: {
    color: "#626262",
    fontSize: 10,
    textAlign: "center",
  },
});

export default SplashScreen;
