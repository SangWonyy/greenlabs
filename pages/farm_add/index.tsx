import React from "react";
import { Header, Body, Container, Title, FarmAddForm } from "components";
import ConfirmModal from "@components/modal/ConfirmModal";
import { useRecoilValue } from "recoil";
import { ModalState } from "@state/ModalState";

const FarmAdd = () => {
  const { isOpen } = useRecoilValue(ModalState);
  return (
    <Container>
      <div className="h-screen flex flex-col relative">
        <Header />
        <Body>
          <Title title="농장 추가" />
          <FarmAddForm />
        </Body>
        {isOpen && <ConfirmModal />}
      </div>
    </Container>
  );
};

export default FarmAdd;
