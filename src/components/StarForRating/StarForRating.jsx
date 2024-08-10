import css from "./StarForRating.module.css";

const StarForRating = ({ filled }) => {
  return (
    <span className={css.star}>
      <svg width="16" height="16" fill={filled ? "#FFC531" : "#f2f4f7"}>
        <use href="/src/assets/svg/symbol-defs.svg#icon-Star"></use>
      </svg>
    </span>
  );
};

export default StarForRating;
