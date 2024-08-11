import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

import { fetchCarDetailsById } from "../../redux/carDetails/carDetailsOperations";
import Loader from "../../components/Loader/Loader";

import css from "./CarDetailsPage.module.css";

const CarDetailsPage = () => {
  const carDetails = useSelector((state) => state.carDetails.carDetails);
  const isLoading = useSelector((state) => state.carDetails.isLoading);
  const isError = useSelector((state) => state.catalog.isError);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCarDetailsById(id));

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [dispatch, id]);

  const closeModal = () => {
    navigate("/catalog");
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains(css.modalOverlay)) {
      closeModal();
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>Щось пішло не так. Спробуйте перезавантажити сторінку.</p>}
      {carDetails !== null && (
        <div className={css.modalOverlay} onClick={handleClickOutside}>
          <div className={css.modalContent}>
            <section className={css.section}>
              <div className={css.container}>
                <h2 className={css.title}>{carDetails.name}</h2>
                <div className={css.top}>
                  <div className={css.reviews}>
                    <div>
                      <svg width="16" height="16" fill="#FFC531">
                        <use href="/svg/symbol-defs.svg#icon-Star"></use>
                      </svg>
                    </div>
                    <p className={css.review}>
                      {carDetails.rating}({carDetails.reviews.length} Reviews)
                    </p>
                  </div>
                  <div className={css.reviews}>
                    <div>
                      <svg width="16" height="16" stroke="black" fill="none">
                        <use href="/svg/symbol-defs.svg#icon-Location"></use>
                      </svg>
                    </div>
                    <p className={css.location}>{carDetails.location.split(", ").reverse().join(", ")}</p>
                  </div>
                </div>
                <p className={css.price}>${carDetails.price}.00</p>
                <button className={css.button} onClick={closeModal}>
                  <svg width="32" height="32" stroke="black">
                    <use href="/svg/symbol-defs.svg#icon-Close"></use>
                  </svg>
                </button>
                <ul className={css.list}>
                  {carDetails.gallery.map((img, i) => (
                    <li className={css.item} key={i}>
                      <img className={css.img} src={img} alt="camper image" />
                    </li>
                  ))}
                </ul>
                <p className={css.text}>{carDetails.description}</p>
                <div className={css.links}>
                  <Link className={css.link} to="features">
                    Features
                  </Link>
                  <Link className={css.link} to="reviews">
                    Reviews
                  </Link>
                </div>
                <div className={css.line}></div>
              </div>
            </section>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetailsPage;
