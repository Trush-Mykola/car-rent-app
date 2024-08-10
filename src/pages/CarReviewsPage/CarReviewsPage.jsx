import { useSelector } from "react-redux";

import Loader from "../../components/Loader/Loader";

import css from "./CarReviewsPage.module.css";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import CarReviews from "../../components/CarReviews/CarReviews";

const CarReviewsPage = () => {
  const carDetails = useSelector((state) => state.carDetails.carDetails);
  const isLoading = useSelector((state) => state.carDetails.isLoading);
  const isError = useSelector((state) => state.carDetails.isError);

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
