/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../Contexts/CityContexts";

function CountryList() {
  const { cities, isLoading } = useCities();

  const countries = cities.reduce((countries, city) => {
    if (countries.some((country) => country.country === city.country)) {
      return countries;
    } else {
      return [...countries, { country: city.country, emoji: city.emoji }];
    }
  }, []);

  if (isLoading) return <Spinner />;

  if (!cities.length && !isLoading)
    return (
      <Message message="No countries added yet, Please click the map area to add a city." />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
}

export default CountryList;
