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
  border-bottom: 2px solid ${({ theme }) => theme.color.alto};

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
  color: ${({ theme }) => theme.color.white};
  border: none;
  height: 30px;
  width: 30px;
  transition: filter 0.3s;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.forestGreen};
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: ${({ theme }) => theme.color.crimson};
    `}

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.color.black};
    filter: brightness(120%);
  }
`;
