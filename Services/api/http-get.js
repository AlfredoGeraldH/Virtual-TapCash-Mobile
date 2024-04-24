import axios from "axios";
import { useEffect, useState } from "react";

account = require("../account.json");

const getAccount = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(data).then(function (response) {
      console.log(response.account);
      setData(response.account);
    });
  }, []);
};

export default getAccount;
