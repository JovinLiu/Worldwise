/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../Contexts/CityContexts";

function CityList() {
  const { cities, isLoading } = useCities();

  if (!cities) return;

  if (isLoading) return <Spinner />;

  if (!cities.length && !isLoading)
    return (
      <Message message="No city added yet, Please click the map area to add a city." />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
