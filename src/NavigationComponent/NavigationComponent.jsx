import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <header>
      NavigationComponent
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favourites</NavLink>
    </header>
  );
};

export default NavigationComponent;
