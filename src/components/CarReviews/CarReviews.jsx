import { useSelector } from "react-redux";
import css from "./CarReviews.module.css";
import StarForRating from "../StarForRating/StarForRating";

const CarReviews = () => {
  const carDetails = useSelector((state) => state.carDetails.carDetails);

  return (
    <div className={css.reviews}>
      <ul className={css.list}>
        {carDetails.reviews.map((review, index) => (
          <li key={index} className={css.item}>
            <div className={css.bubble}>
              <p className={css.bubbleName}>{review.reviewer_name.charAt(0)}</p>
            </div>
            <div className={css.review}>
              <p className={css.name}>{review.reviewer_name}</p>
              <p className={css.rating}>
                {[...Array(5)].map((_, i) => (
                  <StarForRating key={i} filled={i < review.reviewer_rating} />
                ))}
              </p>
            </div>

            <p className={css.text}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarReviews;
