import React, { ReactNode } from "react";

const ModalBackground = ({ children }: { children: ReactNode }) => (
  <div
    className="absolute w-full h-full flex justify-center items-center"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.62)",
    }}
  >
    {children}
  </div>
);
export default ModalBackground;
