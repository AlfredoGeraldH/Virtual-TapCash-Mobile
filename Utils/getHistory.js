const getHistory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve({
          id: "1",

        });
      } else {
        reject("Error Karena tidak berhasil");
      }
    });
  });
};

export default getHistory;
