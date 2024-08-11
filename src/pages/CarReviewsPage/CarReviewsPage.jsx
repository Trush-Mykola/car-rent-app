import { useSelector } from "react-redux";

import Loader from "../../components/Loader/Loader";

import css from "./CarReviewsPage.module.css";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import CarReviews from "../../components/CarReviews/CarReviews";
import { selectCarDetails, selectCarDetailsIsError, selectCarDetailsIsLoading } from "../../redux/carDetails/carDetailsSelectors";

const CarReviewsPage = () => {
  const carDetails = useSelector(selectCarDetails);
  const isLoading = useSelector(selectCarDetailsIsLoading);
  const isError = useSelector(selectCarDetailsIsError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>Something went wrong. Try to reload the page</p>}
      {carDetails !== null && (
        <section className={css.section}>
          <div className={css.container}>
            <CarReviews />
            <ReviewForm />
          </div>
        </section>
      )}
    </>
  );
};

export default CarReviewsPage;
