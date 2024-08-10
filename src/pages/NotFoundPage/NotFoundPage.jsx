import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementTime } from "../../redux/timer/slice";
import { Navigate } from "react-router-dom";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timerValue.timer);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      dispatch(decrementTime());
    }, 1000);
    return () => clearInterval(intervalTime);
  }, [dispatch]);

  if (timer === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className={css.section}>
      <div className={css.container}>
        <img className={css.img} src="/src/assets/svg/not-found.svg" alt="Not found image" />
        <h2 className={css.title}>Ooooops... Something went wrong</h2>
        <p className={css.text}>
          Sorry, but page you visited does not exist. You will be redirected to main page
          <br /> in {timer} seconds!
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
