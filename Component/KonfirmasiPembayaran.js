import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const KonfirmasiPembayaran = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Image source={require("../assets/icon/ic_arrow_left.png")} />
        <Text style={{ fontSize: 16, fontWeight: "400" }}>Konfirmasi</Text>
        <Image source={require("../assets/icon/ic_information.png")} />
      </View>
			
      <View style={styles.card}>
        <View
          style={{
            margin: 20,
            flexDirection: "column",
						alignItems: "center",
            // justifyContent: "space-between",
            rowGap: 8
          }}
        >
					<Text style={{ fontSize: 16, fontWeight: "500", color: "#005E68", marginBottom: 20 }}>
						Konfirmasi Kembali
					</Text>

					<View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 14, fontWeight: "300", color: "#4E4B4B"}}>
						<Text style={{ fontWeight: "400" }}>
							Jenis Transaksi
						</Text>
						<Text style={{ fontWeight: "300" }}>
							Top Up TapCash
						</Text>
					</View>

					<View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 14, fontWeight: "300", color: "#4E4B4B"}}>
						<Text style={{ fontWeight: "400" }}>
							ID TapCash
						</Text>
						<Text style={{ fontWeight: "300" }}>
							1234 5678 9101 1121
						</Text>
					</View>

					<View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 14, fontWeight: "300", color: "#4E4B4B"}}>
						<Text style={{ fontWeight: "400" }}>
							Nominal
						</Text>
						<Text style={{ fontWeight: "300" }}>
							Rp50.000
						</Text>
					</View>

					<View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 14, fontWeight: "300", color: "#4E4B4B"}}>
						<Text style={{ fontWeight: "400" }}>
							Rekening Debet
						</Text>
						<Text style={{ fontWeight: "300" }}>
							123456
						</Text>
					</View>

        </View>
      </View>

      <View style={styles.bottombar}>
        <TouchableOpacity style={{width: '100%', alignSelf: ''}}>
          <View style={styles.bottombutton}>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#FFF" }}>Selanjutnya</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: "#F5F9FA",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    gap: 16
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

  bottombutton: {
    backgroundColor: "#EF5A22",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 9,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    elevation: 2,
    width: '100%'
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
    alignSelf: "flex-end"
  }
});

export default KonfirmasiPembayaran;
