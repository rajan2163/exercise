import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>Close</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};
