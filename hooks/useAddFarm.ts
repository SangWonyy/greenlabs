import { useCallback, useState } from "react";
import { AddFormType } from "../libs/type";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { ModalState } from "@state/ModalState";

export const useAddFarm = () => {
  const setRecoilState = useSetRecoilState(ModalState);
  const [loading, setLoading] = useState<boolean>(true);

  const requestAddFarm = useCallback(async (farmData: AddFormType) => {
    try {
      await axios.post("api/addfarm", farmData);
      const { name, crop } = farmData;
      setRecoilState({ isOpen: true, title: "농장 추가 성공!", subTitle: `${name} ${crop}` });
    } catch (e) {
      setRecoilState({ isOpen: true, title: "농장 추가 실패!" });
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    requestAddFarm,
  };
};
