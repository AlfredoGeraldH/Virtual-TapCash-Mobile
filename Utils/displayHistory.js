import getHistory from "../Utils/getHistory";
import React, { useState, useEffect } from "react";

const displayHistory = () => {
  const [history, setHistory] = useState();

  const handleHistory = async () => {
    try {
      const asyncResult = await getHistory();
      console.log("Berhasil", asyncResult);
      setHistory(asyncResult);
    } catch (execption) {
      console.error("catch:", execption);
    } finally {
      console.log("okeee");
    }
  };

  useEffect(() => {
    handleHistory();
  }, []);

  return history;
};
export default displayHistory;
