const getHistory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve({
          id: "1",
          transaction_name: "My TapCash 1",
          nominal: "2.000.000",
          transaction_date: "12345678",
        });
      } else {
        reject("Error Karena tidak berhasil");
      }
    });
  });
};

export default getHistory;
