import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
`;

const Pane = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
 flex: ${(props) => props.weight}; /* Corrected syntax */
`;

export const SplitScreen = ({ left: Left, right: Right, leftWeight = 1, rightWeight = 1 }) => {
    return (
      <Container>
        <Pane weight={leftWeight}>
          <Left />
        </Pane>
        <Pane weight={rightWeight}>
          <Right />
        </Pane>
      </Container>
    );
  };
  

export default SplitScreen;