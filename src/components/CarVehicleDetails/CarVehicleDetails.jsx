import { useSelector } from "react-redux";
import css from "./CarVehicleDetails.module.css";

const CarVehicleDetails = () => {
  const vehicleDetails = useSelector((state) => state.carDetails.carDetails);
  return (
    <div>
      <h3 className={css.title}>Vehicle details</h3>
      <div className={css.decor}></div>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Form</p>
          <p>{vehicleDetails.form}</p>
        </li>
        <li className={css.item}>
          <p>Length</p>
          <p>{vehicleDetails.length}</p>
        </li>
        <li className={css.item}>
          <p>Width</p>
          <p>{vehicleDetails.width}</p>
        </li>
        <li className={css.item}>
          <p>Height</p>
          <p>{vehicleDetails.height}</p>
        </li>
        <li className={css.item}>
          <p>Tank</p>
          <p>{vehicleDetails.tank}</p>
        </li>
        <li className={css.item}>
          <p>Consumption</p>
          <p>{vehicleDetails.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default CarVehicleDetails;
