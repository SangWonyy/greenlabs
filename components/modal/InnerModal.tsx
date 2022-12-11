import React from "react";
import { useRecoilState } from "recoil";
import { ModalState } from "@state/ModalState";
import { Button } from "@components/index";

const InnerModal = () => {
  const [modalData, setModal] = useRecoilState(ModalState);
  const { title, subTitle } = modalData;
  const clickHandler = () => {
    setModal({ isOpen: false });
  };

  return (
    <div className="flex flex-col gap-4 px-2">
      <div className="font-bold text-2xl flex-1 flex justify-center items-center">{title}</div>
      <div className="text-lg flex-1 flex justify-center items-center">{subTitle}</div>
      <Button onClick={clickHandler}>닫기</Button>
    </div>
  );
};
export default InnerModal;
