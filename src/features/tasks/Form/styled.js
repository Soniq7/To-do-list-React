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
  border: 2px solid ${({ theme }) => theme.color.alto};
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
    filter: brightness(110%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(120%);
    border: 1px solid ${({ theme }) => theme.color.black};
  }
`;
