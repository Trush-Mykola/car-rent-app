import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";

import { fetchCarDetailsById } from "../../redux/carDetails/carDetailsOperations";

import Loader from "../../components/Loader/Loader";

const CarDetailsPage = () => {
  const carDetails = useSelector((state) => state.carDetails.carDetails);
  const isLoading = useSelector((state) => state.carDetails.isLoading);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarDetailsById(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading && <Loader />}
      {carDetails !== null && (
        <section>
          CarDetailsPage
          <h2>{carDetails.name}</h2>
          <ul>
            {carDetails.gallery.map((img, i) => (
              <li key={i}>
                <img src={img} alt="camper image" />
              </li>
            ))}
          </ul>
          <Link to="reviews">Reviews</Link>
          <Link to="features">Features</Link>
          <Outlet />
        </section>
      )}
    </>
  );
};

export default CarDetailsPage;
