import CarsListItem from "../CarsListItem/CarsListItem";
import css from "./CarsList.module.css";

const CarsList = ({ data }) => {
  return (
    <ul className={css.list}>
      <CarsListItem data={data} />
    </ul>
  );
};

export default CarsList;
