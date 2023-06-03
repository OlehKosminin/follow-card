import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--accent-color);
  padding: 20px 15px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  padding: 10px 20px;
  /* border: 3px solid var(--border-btn-color); */
  border-radius: 10px;

  color: var(--white-color);
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: var(--border-btn-color);
  }
`;
