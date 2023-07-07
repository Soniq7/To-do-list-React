import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.color.grey};
  padding: 10px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 10px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.lightTeal};
    transform: scale(1.1);
  }

  &:active {
    background: ${({ theme }) => theme.color.lighterTeal};
    border: 1px solid ${({ theme }) => theme.color.black};
  }
`;
