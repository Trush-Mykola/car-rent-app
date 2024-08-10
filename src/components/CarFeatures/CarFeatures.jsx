import { useSelector } from "react-redux";
import css from "./CarFeatures.module.css";
import { detailIcons } from "../../helpers/detailIcons";

const CarFeatures = () => {
  const features = useSelector((state) => state.carDetails.carDetails);
  const filterFeatures = (feature) => Object.entries(feature.details).filter(([key, value]) => value !== 0);
  const filteredFeatures = filterFeatures(features);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {filteredFeatures.map(([key, value]) => (
          <li key={key} className={css.item}>
            {detailIcons[key] && <div>{detailIcons[key]}</div>}
            <p>{value}</p>
            <p className={css.key}>{key}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarFeatures;
