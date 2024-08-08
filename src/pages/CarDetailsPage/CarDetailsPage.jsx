import { Outlet, useParams } from "react-router-dom";

const CarDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      CarDetailsPage
      <p>Car id is: {id}</p>
      <Outlet />
    </div>
  );
};

export default CarDetailsPage;
