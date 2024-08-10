import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllCars } from "../../redux/catalogCars/operations";

import { setLoadMoreCars } from "../../redux/catalogCars/slice";
import Loader from "../../components/Loader/Loader";
import CarsList from "../../components/CarsList/CarsList";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const displayedCars = useSelector((state) => state.catalog.displayedCars);
  const isLoading = useSelector((state) => state.catalog.isLoading);
  const isError = useSelector((state) => state.catalog.isError);
  const loadMoreVisible = useSelector((state) => state.catalog.loadMoreVisible);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(setLoadMoreCars());
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>Something went wrong</p>}
      {displayedCars !== 0 && (
        <section className={css.section}>
          <div className={css.container}>
            <CarsList data={displayedCars} />
            {loadMoreVisible && (
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
