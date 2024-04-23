const simulateGetAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve({
          id: "1",
          name: "My TapCash 1",
          balance: "2.000.000",
          card_number: "12345678",
        });
      } else {
        reject("Error Karena tidak berhasil");
      }
    });
  });
};

export default simulateGetAccount;
