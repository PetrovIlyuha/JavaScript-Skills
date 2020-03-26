import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: "Advent Pro", sans-serif;
  font-size: 2rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #004080;
  }
  &:active {
    background: #002080;
  }
`;
