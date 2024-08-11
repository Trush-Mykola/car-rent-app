import { Link } from "react-router-dom";

import css from "./CarsListItem.module.css";

const CarsListItem = ({ car, isFavorite = null, onToggleFavorite }) => {
  return (
    <li className={css.item}>
      <img className={css.img} src={car.gallery[0]} alt="" />
      <div className={css.cont}>
        <div className={css.top}>
          <h2 className={css.title}>{car.name}</h2>
          <div className={css.second}>
            <p className={css.price}>${car.price}.00</p>
            <button className={css.addBtn} onClick={() => onToggleFavorite(car)}>
              <svg width="24" height="24" stroke={isFavorite ? "none" : "#101828"} fill={isFavorite ? "#E44848" : "none"}>
                <use href="/src/assets/svg/symbol-defs.svg#icon-Heart"></use>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className={css.middle}>
            <div className={css.third}>
              <div>
                <svg width="16" height="16" fill="#FFC531">
                  <use href="/src/assets/svg/symbol-defs.svg#icon-Star"></use>
                </svg>
              </div>
              <p className={css.review}>
                {car.rating}({car.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.third}>
              <div>
                <svg width="16" height="16" stroke="black" fill="none">
                  <use href="./assets/svg/symbol-defs.svg#icon-Location"></use>
                </svg>
              </div>
              <p className={css.location}>{car.location.split(", ").reverse().join(", ")}</p>
            </div>
          </div>
          <p className={css.text}>{car.description}</p>
          <ul className={css.list}>
            <li className={css.listItem}>
              <div>
                <svg width="20" height="20" stroke="black">
                  <use href="/src/assets/svg/symbol-defs.svg#icon-Users"></use>
                </svg>
              </div>
              <p className={css.listText}>{car.adults} adults</p>
            </li>
            <li className={css.listItem}>
              <div>
                <svg width="20" height="20" stroke="black" fill="none">
                  <use href="/src/assets/svg/symbol-defs.svg#icon-Automatic"></use>
                </svg>
              </div>
              <p className={css.listText}>{car.transmission}</p>
            </li>
            <li className={css.listItem}>
              <div>
                <svg width="20" height="20" stroke="black">
                  <use href="/src/assets/svg/symbol-defs.svg#icon-Fuel"></use>
                </svg>
              </div>
              <p className={css.listText}>{car.engine}</p>
            </li>
            <li className={css.listItem}>
              <div>
                <svg width="20" height="20" stroke="black" fill="none">
                  <use href="/src/assets/svg/symbol-defs.svg#icon-Cutlery"></use>
                </svg>
              </div>
              <p className={css.listText}>Kitchen</p>
            </li>
            <li className={css.listItem}>
              <div>
                <svg width="20" height="20" stroke="black" fill="none">
                  <use href="/src/assets/svg/symbol-defs.svg#icon-Bed"></use>
                </svg>
              </div>
              <p className={css.listText}>{car.details.beds} Beds</p>
            </li>
            <li className={css.listItem}>
              <div>
                <svg width="20" height="20" stroke="black">
                  <use href="/src/assets/svg/symbol-defs.svg#icon-Air"></use>
                </svg>
              </div>
              <p className={css.listText}>AC</p>
            </li>
          </ul>
        </div>
        <Link className={css.button} to={`/catalog/${car._id}`}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CarsListItem;
