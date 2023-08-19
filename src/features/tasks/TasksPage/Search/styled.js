import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.color.alto};
  padding: 10px;
`;