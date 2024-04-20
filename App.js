import { StyleSheet, View } from "react-native";
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

const App = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    width: "100%",
    backgroundColor: "#F5F9FA",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
