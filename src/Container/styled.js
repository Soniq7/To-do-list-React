import styled from "styled-components";

const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const Container = ({ children }) => (
  <Main>
    {children}
  </Main>
);

export default Container;
