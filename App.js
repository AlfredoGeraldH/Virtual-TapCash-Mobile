import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "./Component/HomeScreen";
import CodeScreen from "./Component/CodeScreen";
import SplashScreen from "./Component/SplashScreen";
import LoginScreen from "./Component/LoginScreen";
import TopUp from "./Component/TopUp";
import KonfirmasiPembayaran from "./Component/KonfirmasiPembayaran";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <CodeScreen /> */}
      {/* <SplashScreen /> */}
      {/* <LoginScreen /> */}
      {/* <TopUp /> */}
      <KonfirmasiPembayaran />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F5FEFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
