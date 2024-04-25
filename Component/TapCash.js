import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import simulateGetAccount from "../Utils/getAccount";
import displayAccount from "../Utils/displayAccount";
import AccountDataService from "../api/Services/accountService";

background = require("../assets/tapcash.png");

const Tapcash = () => {
  const [account, setAccount] = useState();

  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const responseAccountData = await AccountDataService.get(1);
        console.log(responseAccountData.data.data);
        setAccount(responseAccountData.data.data);
        console.log(account);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAccount();
  }, []);

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}
    >
      <View
        style={{
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("../assets/logo/logo_tapcash.png")} />
          <Image source={require("../assets/logo/logo_bni_white.png")} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 10,
              color: "#FFF",
              letterSpacing: 1,
            }}
          >
            CARD NUMBER
          </Text>
          <Text
            style={{
              fontSize: 16,
              letterSpacing: 0.5,
              color: "#FFF",
            }}
          >
            {account && account.email}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 12,
  },
});

export default Tapcash;
