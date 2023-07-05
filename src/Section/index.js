import { Container, Header, Title, Body } from "./styled";

const Section = ({ title, body, headerContent }) => (
  <Container>
    <Header>
      <Title>
        {title}
      </Title>
      {headerContent}
    </Header>
    <Body>
        {body}
    </Body>
  </Container>
);

export default Section;