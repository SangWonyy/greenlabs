import { useEffect, useState } from "react";
import { FarmsType } from "../libs/type";
import axios from "axios";

export const useGetFarm = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [farmList, setFarmList] = useState<FarmsType[]>([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const { data } = await axios.get("api/farm");
        setFarmList(data.farms);
      };

      getData();
    } catch (e) {
      alert("farm data 가져오기 실패")
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    farmList,
  };
};
