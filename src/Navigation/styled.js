import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  margin: 0px;
  background-color: ${({ theme }) => theme.color.teal};
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  transition: filter 0.3s;

  &:hover {
    filter: brightness(85%);
  }

  &.active {
    font-weight: bold;
  }
`;
