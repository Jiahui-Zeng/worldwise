import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // const { cityName, emoji, date, notes } = currentCity;

  return (
    <>
      <h3>City {id}</h3>;
      <p>
        Position: {lng}, {lat}
      </p>
    </>
  );
}

export default City;
