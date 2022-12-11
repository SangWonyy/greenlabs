import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ModalState } from "@state/ModalState";

const InnerModal = () => {
  const { title, subTitle } = useRecoilValue(ModalState);
  const setRecoilState = useSetRecoilState(ModalState);
  const clickHandler = () => {
    setRecoilState({ isOpen: false });
  };

  return (
    <div className="w-80 h-32 bg-white rounded text-center p-3 flex flex-col">
      <div className="font-bold text-2xl flex-1 flex justify-center items-center">{title}</div>
      <div className="text-lg flex-1 flex justify-center items-center">{subTitle}</div>
      <div
        className="text-lg flex-1 flex justify-center items-center w-full bg-green-600 text-white rounded"
        onClick={clickHandler}
      >
        닫기
      </div>
    </div>
  );
};
export default InnerModal;
