import CarsListItem from "../CarsListItem/CarsListItem";
import css from "./CarsList.module.css";

const CarsList = ({ data, favCars, onToggleFavorite }) => {
  return (
    <ul className={css.list}>
      {data.map((car, index) => {
        return <CarsListItem key={index} car={car} isFavorite={favCars.some((favCar) => favCar._id === car._id)} onToggleFavorite={onToggleFavorite} />;
      })}
    </ul>
  );
};

export default CarsList;
