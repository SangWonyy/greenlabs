import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "@state/UserState";

const Header = () => {
  const router = useRouter();
  const { id, name } = useRecoilValue(UserInfoState);

  useEffect(() => {
    const needLogin = !id || !name;
    if (!needLogin) return;

    alert("다시 로그인을 시도해주세요");
    router.replace("/");
  }, []);

  return (
    <header className="border-b p-2 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold" onClick={() => router.push("home")}>
          농장관리시스템
        </h1>
        <span className="text-sm">
          {name}({id})
        </span>
      </div>
    </header>
  );
};

export default Header;
