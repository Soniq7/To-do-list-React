import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  margin: 0px;
  background-color: ${({ theme }) => theme.color.teal};
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  transition: filter 0.5s;

  &:hover {
    filter: brightness(80%);
  }

  &.active {
    font-weight: bold;
  }
`;
