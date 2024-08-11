import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader/Loader";
import CarsList from "../../components/CarsList/CarsList";

import css from "./FavoritesPage.module.css";
import { removeFavoriteCar, setFavoritesCars } from "../../redux/catalogCars/slice";
import ErrorText from "../../components/ErrorText/ErrorText";
import { selectFavoritesCars, selectIsError, selectIsLoading } from "../../redux/catalogCars/selectors";

const FavoritesPage = () => {
  const favCars = useSelector(selectFavoritesCars);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  const handleToggleFavorite = (car) => {
    const isAlreadyFavorite = favCars.some((favCar) => favCar._id === car._id);
    isAlreadyFavorite ? dispatch(removeFavoriteCar(car)) : dispatch(setFavoritesCars([...favCars, car]));
  };
  return (
    <>
      {isLoading && <Loader />}
      {isError && <p className={css.error}>Something went wrong. Try to reload the page</p>}
      {favCars.length > 0 ? (
        <section className={css.section}>
          <div className={css.container}>
            <CarsList data={favCars} favCars={favCars} onToggleFavorite={handleToggleFavorite} />
          </div>
        </section>
      ) : (
        <ErrorText />
      )}
    </>
  );
};

export default FavoritesPage;
