import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.teal};
  margin: 0 0 0 20px;
  transition: color 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    justify-content: center;
    margin: 10px;
  }
`;

export const Button = styled(StyledButtons)`
  &:hover {
    color: ${({ theme }) => theme.color.lighterTeal};
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.darkerGrey};
  }
`;
