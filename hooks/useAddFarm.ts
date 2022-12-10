import { useCallback, useState } from "react";
import { AddFormType } from "../libs/type";
import axios from "axios";

export const useAddFarm = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const requestAddFarm = useCallback(async (farmData: AddFormType) => {
    try {
      await axios.post("api/addfarm", farmData);
    } catch (e) {
      alert("농장 추가 실패");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    requestAddFarm,
  };
};
