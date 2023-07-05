import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 2px solid #ddd;
  padding: 10px;
`;

export const Button = styled.button`
  background-color: hsl(180, 100%, 25%);
  color: white;
  border: none;
  padding: 10px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background: hsl(180, 99%, 30%);
    transform: scale(1.1);
  }

  &:active {
    background: hsl(180, 100%, 35%);
    border: 1px solid black;
  }
`;
