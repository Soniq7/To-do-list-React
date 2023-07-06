import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: white;
  box-shadow: 0 0 5px #ddd;
  margin: 10px 0;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;
