import { atom } from "recoil";
import { ModalType } from "../libs/type";

export const ModalState = atom<ModalType>({
  key: "ModalState",
  default: { isOpen: false, title: "" },
});
