import React from "react";
import { useRecoilValue } from "recoil";
import { ModalState } from "@state/ModalState";
import ConfirmModal from "@components/modal/ConfirmModal";

const ModalFrame = () => {
  const { isOpen } = useRecoilValue(ModalState);
  return <div id="_modal">{isOpen && <ConfirmModal />}</div>;
};

export default ModalFrame;
