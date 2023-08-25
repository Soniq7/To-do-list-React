import { toAuthor, toTasks } from "../routes";
import { NavList, StyledNavLink } from "./styled";

export default () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to={toTasks()}>
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toAuthor()}>
            O autorze
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};
