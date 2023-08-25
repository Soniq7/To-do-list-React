import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.teal};
  margin: 0 0 0 20px;
  transition: filter 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    justify-content: center;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%)
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
    filter: none;
  }
`;