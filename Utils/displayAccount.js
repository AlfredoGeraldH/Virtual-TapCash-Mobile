import simulateGetAccount from "../Utils/getAccount";
import React, { useState, useEffect } from "react";

const displayAccount = () => {
  const [account, setAccount] = useState();

  const handleAsync = async () => {
    try {
      const asyncResult = await simulateGetAccount();
      console.log("Berhasil", asyncResult);
      setAccount(asyncResult);
    } catch (execption) {
      console.error("catch:", execption);
    } finally {
      console.log("okeee");
    }
  };

  useEffect(() => {
    handleAsync();
  }, []);

  return account;
};

export default displayAccount;
