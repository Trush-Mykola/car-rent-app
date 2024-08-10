import { Link } from "react-router-dom";
import css from "./CarsListItem.module.css";

// "_id": "1",
// "name": "Road Bear C 23-25",
// "price": 10000,
// "rating": 4.5,
// "location": "Ukraine, Kyiv",
// "adults": 3,
// "children": 2,
// "engine": "petrol",
// "transmission": "automatic",
// "form": "alcove",
// "length": "7.3m",
// "width": "2.65m",
// "height": "3.65m",
// "tank": "208l",
// "consumption": "30l/100km",
// "description": "Embark on an unforgettable journey with the Road Bear C 23-25, an epitome of comfort and convenience on wheels. This alcove-style motorhome is meticulously designed to cater to the needs of families and small groups, ensuring a seamless and enjoyable road trip experience. The sleek exterior houses a spacious and thoughtfully laid out interior, making it your home away from home. The Road Bear C 23-25 boasts a stylish and modern design, coupled with top-notch amenities to enhance your travel adventures. The interior is not only aesthetically pleasing but also functional, providing ample living and sleeping space. Whether you're cruising along scenic highways or parked in a picturesque campsite, this RV offers the perfect blend of functionality and comfort. Inside, you'll find a fully equipped kitchen, complete with a refrigerator, microwave, and a three-burner hob, allowing you to prepare delicious meals on the go. The bathroom is fitted with a shower and toilet, ensuring you have the convenience of home wherever your travels take you. The sleeping quarters are designed for relaxation, with three comfortable beds to accommodate both adults and children. Additional features include air conditioning, a TV, CD player, radio, and ample storage space for all your travel essentials. The Road Bear C 23-25 is equipped with a 35kg gas supply for cooking, and a water tank with a capacity of 151 liters to meet your daily needs. Fuelled by petrol and featuring an automatic transmission, this motorhome is not only easy to drive but also fuel-efficient, allowing you to focus on enjoying the journey rather than worrying about logistics. Create lasting memories with your loved ones as you navigate the roads in the Road Bear C 23-25. It's not just an RV; it's a mobile sanctuary for your adventures, promising comfort, style, and the freedom to explore at your own pace.",
// "details": {
// "airConditioner": 1,
// "bathroom": 1,
// "kitchen": 1,
// "beds": 3,
// "TV": 1,
// "CD": 1,
// "radio": 1,
// "shower": 1,
// "toilet": 1,
// "freezer": 1,
// "hob": 3,
// "microwave": 1,
// "gas": "35kg",
// "water": "151l"
// },
// "gallery": [
// "https://ftp.goit.study/img/campers-test-task/1-1.webp",
// "https://ftp.goit.study/img/campers-test-task/1-2.webp",
// "https://ftp.goit.study/img/campers-test-task/1-3.webp"
// ],
// "reviews": [
// {
// "reviewer_name": "Alice",
// "reviewer_rating": 5,
// "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
// },
// {
// "reviewer_name": "Bob",
// "reviewer_rating": 4,
// "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
// }
// ]
const CarsListItem = ({ data }) => {
  return (
    <>
      {data.map((car, index) => (
        <li key={index} className={css.item}>
          <img className={css.img} src={car.gallery[0]} alt="" />
          <div className={css.cont}>
            <div className={css.top}>
              <h2 className={css.title}>{car.name}</h2>
              <div className={css.second}>
                <p className={css.price}>${car.price}.00</p>
                <div>
                  <svg width="24" height="24" stroke="#101828" fill="none">
                    <use href="/src/assets/svg/symbol-defs.svg#icon-Heart"></use>
                  </svg>
                </div>
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
                      <use href="/src/assets/svg/symbol-defs.svg#icon-Location"></use>
                    </svg>
                  </div>
                  <p className={css.location}>{car.location.split(", ").toReversed().join(", ")}</p>
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
      ))}
    </>
  );
};

export default CarsListItem;
