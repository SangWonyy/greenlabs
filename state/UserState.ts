import { atom } from "recoil";
import { UserInfoType } from "../libs/type";

export const UserInfoState = atom<UserInfoType>({
  key: "UserInfoState",
  default: { id: undefined, contents: undefined },
});
