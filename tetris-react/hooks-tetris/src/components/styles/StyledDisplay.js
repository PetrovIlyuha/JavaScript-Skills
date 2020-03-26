import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? "red" : "yellow")};
  background: #000;
  font-family: "Advent Pro", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
`;
