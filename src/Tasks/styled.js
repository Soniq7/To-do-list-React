import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid #ddd;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  word-break: break-word;

  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  color: white;
  border: none;
  height: 30px;
  width: 30px;
  transition: 0.5s;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background-color: hsl(120, 100%, 25%);

      &:hover {
        cursor: pointer;
        background: hsl(120, 100%, 30%);
      }

      &:active {
        border: 1px solid black;
        background: hsl(120, 100%, 40%);
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: hsl(348, 83%, 47%);

      &:hover {
        cursor: pointer;
        background: hsl(348, 83%, 57%);
      }

      &:active {
        border: 1px solid black;
        background: hsl(348, 83%, 62%);
      }
    `}
`;
