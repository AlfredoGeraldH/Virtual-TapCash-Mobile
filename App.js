import { StyleSheet, View, ImageBackground } from "react-native";
import HomeWithoutCard from "./Screen/WithoutCardScreen";
import HomeScreen from "./Screen/HomeScreen";
import CodeScreen from "./Screen/CodeScreen";
import SplashScreen from "./Screen/SplashScreen";
import LoginScreen from "./Screen/LoginScreen";
import TopUp from "./Screen/TopUpScreen";
import KonfirmasiPembayaran from "./Screen/ConfirmPaymentScreen";
import WithdrawScreen from "./Screen/WithdrawScreen";
import SuccessScreen from "./Screen/SuccessScreen";
import ScanCardScreen from "./Screen/ScanCardScreen";
import ScanSuccessfulScreen from "./Screen/ScanSuccessfulScreen";
import LoginPopUp from "./Screen/LoginPopUpScreen";
import Tapcash from "./Component/TapCash";
import CardPopUp from "./Screen/CardPopUp";
import LightButton from "./Component/LightButton";
import FilledButton from "./Component/FilledButton";

const App = () => {
  const background = require("./assets/background.png");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <HomeScreen /> */}
        {/* <CodeScreen /> */}
        {/* <SplashScreen /> */}
        {/* <LoginScreen /> */}
        {/* <TopUp /> */}
        {/* <KonfirmasiPembayaran /> */}
        {/* <HomeWithoutCard /> */}
        {/* <WithdrawScreen /> */}
        {/* <SuccessScreen /> */}
        {/* <ScanCardScreen /> */}
        {/* <ScanSuccessfulScreen /> */}
        {/* <LoginPopUp /> */}
        {/* <Tapcash /> */}
        {/* <CardPopUp /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    width: "100%",
    backgroundColor: "#F5F9FA",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
});

export default App;
