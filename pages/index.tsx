import React, { ChangeEvent, useCallback, useState } from "react";
import { ScreenWrap, Container, Input, Button } from "components";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { UserInfoState } from "@state/UserState";

//TODO: Q1-1 로그인 상태 관리
// 상태관리 라이브러리 (context, redux, recoil 등) 을 활용해서 로그인 상태를 관리하는 기능을 개발 해주세요
// 라이브러리 사용은 자율입니다.
// 로그인이 완료되면 /home 라우터로 이동해야합니다.

const Login = () => {
  const [id, setId] = useState<string>();
  const [name, setName] = useState<string>();
  const setRecoilState = useSetRecoilState(UserInfoState);
  const { push } = useRouter();

  const idOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const idValue = e.target.value;
    setId(idValue);
  }, []);

  const nameOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const nameValue = e.target.value;
    setName(nameValue);
  }, []);

  const clickHandler = () => {
    if (!id || !name) {
      alert("정보를 입력해주세요");
      return;
    }

    setRecoilState({ id, name });
    push("home");
  };

  return (
    <Container>
      <ScreenWrap>
        <div className="w-[90%] flex flex-col gap-2">
          <h1 className="font-bold text-xl">그린랩스 농장관리 서비스</h1>
          <Input type="text" name="id" placeholder="아이디를 입력하세요" onChange={idOnChange} />
          <Input type="text" name="name" placeholder="이름을 입력하세요" onChange={nameOnChange} />
          <Button onClick={clickHandler}>로그인</Button>
        </div>
      </ScreenWrap>
    </Container>
  );
};

export default Login;
