import { Link } from "react-router-dom";
import { Section, Container, Button, Title } from "./MainPage.styled";

const MainPage = () => {
  return (
    <Section>
      <Container>
        <Title>Cards social media</Title>
        <Link
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
          <Button>Go to cards</Button>
        </Link>
      </Container>
    </Section>
  );
};

export default MainPage;
