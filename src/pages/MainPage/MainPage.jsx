import { NavLink } from "react-router-dom";
import { Section, Container } from "./MainPage.styled";

const MainPage = () => {
  return (
    <Section>
      <Container>
        <NavLink
          to="/cards"
          style={{
            textDecoration: "none",
            color: "var(--white-color)",
            fontSize: "20px",
          }}
          activeStyle={{
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Cards
        </NavLink>
      </Container>
    </Section>
  );
};

export default MainPage;
