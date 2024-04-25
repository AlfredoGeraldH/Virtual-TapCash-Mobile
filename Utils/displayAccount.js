// import simulateGetAccount from "../Utils/getAccount";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const displayAccount = () => {
//   const [account, setAccount] = useState();

//   const getData = () => {
//     useEffect(() => {
//       axios.get("https://reqres.in/api/users/12").then(function (response) {
//         console.log(response.data);
//         setAccount(response.data);
//       });
//     }, []);
//   };

//   const updateData = () => {
//     axios({
//       method: "put",
//       url: "https://jsonplaceholder.typicode.com/todos/1",
//       data: {
//         userId: 10,
//         title: "apaan tuh",
//         completed: true,
//       },
//     }).then(() => {
//       ToastAndroid.show("Update Data Succest!", ToastAndroid.SHORT);
//     });
//   };

//   const deleteData = () => {
//     axios({
//       method: "delete",
//       url: "https://jsonplaceholder.typicode.com/todos/10",
//       data: {},
//     }).then(() => {
//       ToastAndroid.show("Hapus Data Succest!", ToastAndroid.SHORT);
//     });
//   };
//   return account;
// };

// const submitData = () => {
//   axios({
//     method: "post",
//     url: "https://jsonplaceholder.typicode.com/todos",
//     data: {
//       userId: 5,
//       title: "coba",
//       completed: true,
//     },
//   }).then(() => {
//     ToastAndroid.show("Submit Data Succest!", ToastAndroid.SHORT);
//   });
// };

// export default displayAccount;
