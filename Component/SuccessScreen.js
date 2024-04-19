import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Image source={require("../assets/icon/ic_arrow_left.png")} />
        <Text style={{ fontSize: 16, fontWeight: "400" }}>Informasi</Text>
        <Image source={require("../assets/icon/ic_information.png")} />
      </View>

			<View style={{alignItems: 'center', justifyContent: 'center', margin: 24, rowGap: 8 }}>
				<Image source={require("../assets/icon/ic_success.png")} />
				<Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68"}}>
          Withdraw TapCash Berhasil
				</Text>
				<Text style={{ fontSize: 14, fontWeight: "400", color: "#4E4B4B"}}>
					Saldo TapCash otomatis berkurang
				</Text>
			</View>

      <View style={styles.card}>
        <View
          style={{
            margin: 20,
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "space-between",
            rowGap: 8,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68", marginBottom: 20 }}>
            Detail Transaksi
          </Text>

					<View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>ID Transaksi</Text>
            <Text style={{ fontWeight: "300" }}>12345667</Text>
          </View>

					<View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Jenis Transaksi</Text>
            <Text style={{ fontWeight: "300" }}>Top Up TapCash</Text>
          </View>

					<View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Tanggal</Text>
            <Text style={{ fontWeight: "300" }}>12/04/2024</Text>
          </View>

					<View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>ID TapCash</Text>
            <Text style={{ fontWeight: "300" }}>1234 5678 9101 1121</Text>
          </View>

          <View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Nominal</Text>
            <Text style={{ fontWeight: "300" }}>Rp50.000</Text>
          </View>

					<View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Rekening Debet</Text>
            <Text style={{ fontWeight: "300" }}>123456</Text>
          </View>

					<View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Biaya Admin</Text>
            <Text style={{ fontWeight: "300" }}>Rp0</Text>
          </View>

					<View style={styles.cardinnertext}>
            <Text style={{ fontWeight: "400" }}>Jumlah dibayarkan</Text>
            <Text style={{ fontWeight: "300" }}>Rp50.000</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }} />

      <View style={styles.bottombar}>
        <TouchableOpacity style={{ width: "100%", alignSelf: "" }}>
          <View style={styles.bottombutton}>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#EF5A22" }}>
              Kembali
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#F5F9FA",
    alignItems: "center",
    width: "100%",
    marginTop: 24,
    gap: 16,
  },

  topbar: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#FCFCFC",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F1F5",
  },

  card: {
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "black",
    elevation: 4,
  },

  cardinnertext: {
    width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		fontSize: 14,
		fontWeight: "300",
		color: "#4E4B4B",
  },

  bottombutton: {
    backgroundColor: "#FFF",
		borderColor: "#EF5A22",
		borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 9,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    elevation: 2,
    width: "100%",
  },

  bottombar: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F1F5",
    alignSelf: "flex-end",
  },
});

export default SuccessScreen;
