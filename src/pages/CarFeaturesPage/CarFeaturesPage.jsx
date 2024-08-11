import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

import css from "./CarFeaturesPage.module.css";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import CarFeatures from "../../components/CarFeatures/CarFeatures";
import CarVehicleDetails from "../../components/CarVehicleDetails/CarVehicleDetails";
import { selectCarDetails, selectCarDetailsIsError, selectCarDetailsIsLoading } from "../../redux/carDetails/carDetailsSelectors";

const CarFeaturesPage = () => {
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
            <div>
              <CarFeatures />
              <CarVehicleDetails />
            </div>
          </div>
          <ReviewForm />
        </section>
      )}
    </>
  );
};

export default CarFeaturesPage;
