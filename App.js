import { StyleSheet, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
import ConfirmPaymentScreen from "./Screen/ConfirmPaymentScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator();

const App = () => {
  const background = require("./assets/background.png");
  return (
    <>
      {/* <HomeScreen /> */}
      {/* <CodeScreen /> */}
      {/* <SplashScreen /> */}
      {/* <LoginScreen /> */}
      {/* <TopUp /> */}
      {/* <ConfirmPaymentScreen /> */}
      {/* <HomeWithoutCard /> */}
      {/* <WithdrawScreen /> */}
      {/* <SuccessScreen /> */}
      {/* <ScanCardScreen /> */}
      {/* <ScanSuccessfulScreen /> */}
      {/* <LoginPopUp /> */}
      {/* <Tapcash /> */}
      {/* <CardPopUp /> */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={SplashScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    width: "100%",
    margin: 100,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
