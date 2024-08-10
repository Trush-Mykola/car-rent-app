import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </header>
  );
};

export default NavigationComponent;
