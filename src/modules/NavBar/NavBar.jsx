import { NavLink } from "react-router-dom";
import { Header, List, Item } from "./Navbar.styled";
import items from "./items";

const NavBar = () => {
  const markup = items.map(({ id, text, link }) => {
    return (
      <Item key={id}>
        <NavLink
          to={link}
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
          {text}
        </NavLink>
      </Item>
    );
  });

  return (
    <Header>
      <List>{markup}</List>
    </Header>
  );
};

export default NavBar;
