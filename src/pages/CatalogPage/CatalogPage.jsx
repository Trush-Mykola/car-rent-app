import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllCars } from "../../redux/catalogCars/operations";

import { removeFavoriteCar, setFavoritesCars, setLoadMoreCars } from "../../redux/catalogCars/slice";
import Loader from "../../components/Loader/Loader";
import CarsList from "../../components/CarsList/CarsList";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const displayedCars = useSelector((state) => state.catalog.displayedCars);
  const favCars = useSelector((state) => state.catalog.favoritesCars);
  const loadMoreVisible = useSelector((state) => state.catalog.loadMoreVisible);
  const isLoading = useSelector((state) => state.catalog.isLoading);
  const isError = useSelector((state) => state.catalog.isError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const handleToggleFavorite = (car) => {
    const isAlreadyFavorite = favCars.some((favCar) => favCar._id === car._id);

    isAlreadyFavorite ? dispatch(removeFavoriteCar(car)) : dispatch(setFavoritesCars([...favCars, car]));
  };

  const handleLoadMore = () => {
    dispatch(setLoadMoreCars());
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>Something went wrong. Try to reload the page</p>}
      {displayedCars.length > 0 && (
        <section className={css.section}>
          <div className={css.container}>
            <CarsList data={displayedCars} favCars={favCars} onToggleFavorite={handleToggleFavorite} />
            {!isLoading && loadMoreVisible && (
              <button className={css.button} onClick={handleLoadMore}>
                Load more
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default CatalogPage;
