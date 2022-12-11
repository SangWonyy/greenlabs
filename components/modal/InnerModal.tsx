import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ModalState } from "@state/ModalState";
import { Button } from "@components/index";

const InnerModal = () => {
  const { title, subTitle } = useRecoilValue(ModalState);
  const setRecoilState = useSetRecoilState(ModalState);
  const clickHandler = () => {
    setRecoilState({ isOpen: false });
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
