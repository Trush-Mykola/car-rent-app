import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>
          Your Adventure Awaits <br /> Rent the Perfect Camper for Your Journey.
        </h1>
        <p className={css.text}>
          Explore your dream places with our campers, equipped for every adventure. Whether you’re planning a weekend getaway or a cross-country expedition, our campers are your
          perfect travel companions.
        </p>
        <div className={css.wrapper}>
          <NavLink to="/catalog">Rent now</NavLink>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
