const data = require("./account.json");

const simulateGetAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve({
          data,
        });
      } else {
        reject("Error Karena tidak berhasil");
      }
    });
  });
};

export default simulateGetAccount;
