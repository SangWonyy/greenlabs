import { useCallback, useEffect, useState } from "react";
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
      alert("farm data 가져오기 실패");
    } finally {
      setLoading(false);
    }
  }, []);

  const clickHouse = useCallback(
    (farmId: number, houseId: number) => {
      const findFarmIndex = farmList.findIndex((farm) => farm.id === farmId);
      if (findFarmIndex < 0) {
        alert("선택한 farm을 찾을 수 없습니다.");
        return;
      }
      const houses = farmList[findFarmIndex].houses;
      if (!houses) return;

      const findHouseIndex = houses.findIndex((house) => house.id === houseId);
      if (findHouseIndex < 0) {
        alert("선택한 house를 찾을 수 없습니다.");
        return;
      }

      const clickedHouse = houses[findHouseIndex];
      clickedHouse.active = !clickedHouse.active;
      setFarmList([...farmList]);
    },
    [farmList],
  );

  return {
    clickHouse,
    loading,
    farmList,
  };
};
