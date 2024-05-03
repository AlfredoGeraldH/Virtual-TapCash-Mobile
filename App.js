import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterCardScreen from "./Screen/RegisterCardScreen";
import HomeScreen from "./Screen/HomeScreen";
import CodeScreen from "./Screen/CodeScreen";
import SplashScreen from "./Screen/SplashScreen";
import LoginScreen from "./Screen/LoginScreen";
import TopUp from "./Screen/TopUpScreen";

import WithdrawScreen from "./Screen/WithdrawScreen";
import SuccessScreen from "./Screen/SuccessScreen";
import ScanCardScreen from "./Screen/ScanCardScreen";
import ScanSuccessfulScreen from "./Screen/ScanSuccessfulScreen";

import ConfirmPaymentScreen from "./Screen/ConfirmPaymentScreen";
import PinScreen from "./Screen/PinScreen";
import RfidInputScreen from "./Screen/RfidInputScreen";
import RegisterOptionScreen from "./Screen/RegisterOptionScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
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
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterCard"
          component={RegisterCardScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Code"
          component={CodeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ScanCard"
          component={ScanCardScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ScanSuccessful"
          component={ScanSuccessfulScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Withdraw"
          component={WithdrawScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TopUp"
          component={TopUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Success"
          component={SuccessScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ConfirmPayment"
          component={ConfirmPaymentScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Pin"
          component={PinScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterOption"
          component={RegisterOptionScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RfidInput"
          component={RfidInputScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
