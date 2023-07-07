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
  border-bottom: 2px solid ${({ theme }) => theme.color.grey};

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
  transition: 0.5s;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.green};

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.color.lightGreen};
      }

      &:active {
        border: 1px solid ${({ theme }) => theme.color.black};
        background: ${({ theme }) => theme.color.lighterGreen};
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: ${({ theme }) => theme.color.crimson};

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.color.lightCrimson};
      }

      &:active {
        border: 1px solid ${({ theme }) => theme.color.black};
        background: ${({ theme }) => theme.color.lighterCrimson};
      }
    `}
`;
