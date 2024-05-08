import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import FilledButton from "../Component/FilledButton";
import TopBar from "../Component/topbar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTokenStore } from "../tokenStore";
import AccountDataService from "../api/Services/accountService";
import cardDataService from "../api/Services/cardService";
import LightButton from "../Component/LightButton";

const WithdrawScreen = ({ navigation }) => {
  const [numberInput, setNumberInput] = useState('');
  const [numberFormatted, setNumberFormatted] = useState('');

  const [account, setAccount] = useState([]);
  const [cards, setCards] = useState([]);
  const [nominalWarningVisible, setNominalWarningVisible] = useState(false);

  const token = useTokenStore((state) => state.token);

  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const responseAccountData = await AccountDataService.get(token);
        setAccount(responseAccountData.data.data);
        const responseCardData = await cardDataService.get(
          token,
          responseAccountData.data.data.virtualTapCashId
        );
        setCards(responseCardData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAccount();
  }, []);

  useEffect(() => {
    if (
      numberInput >
        cards.filter((card) => card.isDefault === true)[0]?.tapCashBalance ||
      numberInput == null ||
      numberInput == 0
    ) {
      setNominalWarningVisible(true);
    } else {
      setNominalWarningVisible(false);
    }
  }, [numberInput]);

  // Fungsi untuk memformat angka dengan titik setiap tiga digit
  const formatNumberWithSeparator = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  // Handler perubahan input angka
  const handleInputChange = (inputValue) => {
    // Menghapus karakter non-digit dari nilai input
    const formattedValue = inputValue.replace(/\D/g, '');
    // Update state dengan angka yang belum diformat
    setNumberInput(formattedValue);
    // Memformat angka dengan titik setiap tiga digit
    const formattedNumber = formatNumberWithSeparator(formattedValue);
    // Update state dengan angka yang diformat
    setNumberFormatted(formattedNumber);
  };

  return (
    <View style={styles.container}>
      <TopBar title="Withdraw TapCash" />
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {cards.filter((card) => card.isDefault === true)[0]?.cardName}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#626262" }}>
            {cards.filter((card) => card.isDefault === true)[0]?.rfid}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "300", color: "#4E4B4B" }}>
            Saldo saat ini
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(
              cards.filter((card) => card.isDefault === true)[0]?.tapCashBalance
            )}
          </Text>
        </View>
      </View>

      <View style={styles.warningcard}>
        <View
          style={{ margin: 20, flexDirection: "row", rowGap: 8, width: "80%" }}
        >
          <Image
            style={{ marginRight: 8 }}
            source={require("../assets/icon/ic_warning.png")}
          />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#4E4B4B" }}>
            Withdraw TapCash merupakan layanan pemindahan saldo TapCash ke
            rekening debit nasabah yang terdapat pada mobile banking
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={{ margin: 20, flexDirection: "column", rowGap: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68" }}>
            Rekening Tujuan
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#4E4B4B" }}>
            {account.accountNumber}
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#005E68",
              marginTop: 32,
            }}
          >
            Nominal
          </Text>

          <TextInput
            style={{
              fontSize: 14,
              borderBottomColor: "#000000",
              borderBottomWidth: 0.5,
            }}
            onChangeText={handleInputChange}
            value={numberFormatted}
            placeholder="Nominal penarikan kembali saldo TapCash"
            keyboardType="numeric"
          />
        </View>
        <Text
          style={{
            color: "red",
            fontWeight: "500",
            fontSize: 12,
            marginLeft: 16,
            marginBottom: 20,
          }}
        >
          {" "}
          {nominalWarningVisible ? "Masukkan nominal dengan benar!" : ""}{" "}
        </Text>
      </View>
      <View style={{ flex: 1 }} />

      {nominalWarningVisible ? (
        <View>
          <View
            style={{
              flexDirection: "row",
              width: "110%",
              paddingVertical: 20,
              paddingHorizontal: 16,
              backgroundColor: "#FFF",
              alignItems: "center",
            }}
          >
            <LightButton buttontext={"Selanjutnya"} />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.push("ConfirmPayment", {
              price: parseInt(numberInput), // Mengonversi nilai input menjadi integer sebelum menyimpannya
              nominal: parseInt(numberInput), // Mengonversi nilai input menjadi integer sebelum menyimpannya
              rekening: account.accountNumber,
              idCard: cards.filter((card) => card.isDefault === true)[0]
                ?.cardId,
              virtualTapCashId: account.virtualTapCashId,
              rfid: cards.filter((card) => card.isDefault === true)[0]?.rfid,
              type: "WITHDRAW",
            });
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "110%",
              paddingVertical: 20,
              paddingHorizontal: 16,
              backgroundColor: "#FFF",
              alignItems: "center",
            }}
          >
            <FilledButton buttontext={"Selanjutnya"} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 16,
  },

  card: {
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "black",
    elevation: 4,
  },

  warningcard: {
    width: "90%",
    backgroundColor: "#FEF1EC",
    shadowColor: "black",
    flexDirection: "row",
    borderRadius: 8,
    shadowColor: "black",
    elevation: 4,
  },

  warning: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FEF1EC",
    shadowColor: "black",
    elevation: 1,
    flexDirection: "row",
  },

  bottombar: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
});

export default WithdrawScreen;
