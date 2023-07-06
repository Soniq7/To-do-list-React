import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  border: none;
  color: teal;
  margin: 0 0 0 20px;
  transition: color 0.5s;

  @media (max-width: 767px) {
    flex-basis: 100%;
    justify-content: center;
    margin: 10px;
  }
`;

export const Button = styled(StyledButtons)`
  &:hover {
    color: hsl(180, 100%, 35%);
    cursor: pointer;
  }

  &:disabled {
    color: #ccc;
  }
`;
