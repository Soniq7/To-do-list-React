import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Sonia Skowron-Zarębska"
      body={
        <>
          <p>
            Moją pasją jest{" "}
            <strong>projektowanie, rysowanie i szkicowanie</strong>. Od
            najmłodszych lat wykazywałam zdolności plastyczne i umiejętność
            wizualnej i estetycznej prezentacji.
            <br />W Szkocji (Wielka Brytania), gdzie miałam przyjemność mieszkać
            przez 16 lat, ukończyłam studia <strong>Open University</strong> z
            tytułem <strong>Bachelor of Science (Honours) degree</strong> o
            kierunku{" "}
            <strong>"Design and Innovation (Environmental Path)"</strong>.
          </p>
          <p>
            Obecnie, jestem niedaleka od ukończenia kursu{" "}
            <strong>Frontend Developer od podstaw</strong> oferowanego przez
            firmę <strong>YouCode</strong>.<br />
            Uważam, że programista frontendowy świtnie łączy ze sobą moją pasję
            do projektowania, czyli w tym wypadku wizualnego prezentowania stron
            i aplikacji, jak i zamiłowania do komputerów, które od zawsze we
            mnie się tliło!
            <br /> 🥰
          </p>
        </>
      }
    />
  </Container>
);
