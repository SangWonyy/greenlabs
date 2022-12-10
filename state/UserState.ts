import { atom } from "recoil";
import { TUserInfo } from "@type/userInfo.type";

export const UserInfoState = atom<TUserInfo>({
  key: "UserInfoState",
  default: { id: undefined, contents: undefined },
});
