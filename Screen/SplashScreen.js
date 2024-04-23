import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, []);

  const background = require("../assets/background.png");

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={{ alignItems: "center", gap: 8, marginTop: "45%" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/logo/logo_bni.png")} />
        </TouchableOpacity>
        <Text style={{ fontSize: 14, color: "#005E68", fontWeight: "500" }}>
          Melayani Negeri Kebanggaan Bangsa
        </Text>
      </View>
      <View
        style={{
          width: "70%",
          alignItems: "center",
          gap: 8,
          marginTop: "100%",
        }}
      >
        <Image source={require("../assets/logo/logo_lps.png")} />
        <Text style={styles.font}>
          PT Bank Negara Indonesia (Persero) Tbk. berizin dan diawasi oleh
          Otoritas Jasa Keuangan (OJK) serta merupakan peserta penjaminan
          Lembaga Penjamin Simpanan (LPS)
        </Text>
        <Text style={styles.font}>v5.11.1</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  font: {
    color: "#626262",
    fontSize: 10,
    textAlign: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default SplashScreen;
