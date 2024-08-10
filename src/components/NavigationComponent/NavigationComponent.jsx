import { NavLink } from "react-router-dom";
import css from "./NavigationComponent.module.css";
import clsx from "clsx";

const NavigationComponent = () => {
  return (
    <header className={css.header}>
      <NavLink to="/" className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}>
        Favorites
      </NavLink>
    </header>
  );
};

export default NavigationComponent;
