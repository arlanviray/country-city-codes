import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import CITY_CODES from "./data-city-codes";
import COUNTRY_CODES from "./data-country-codes";

// add country code to the city codes
CITY_CODES.map((city) => {
  const countryCodes = COUNTRY_CODES.find(
    (country) => country.Country === city.Country
  );
  city["CountryAlpha2"] = countryCodes ? countryCodes.Alpha2 : undefined;
  city["CountryAlpha3"] = countryCodes ? countryCodes.Alpha3 : undefined;
});

function App() {
  const [searchResults, setSearchResults] = useState(CITY_CODES);

  return (
    <>
      <Header initCities={CITY_CODES} setSearchResults={setSearchResults} />
      <Content searchResults={searchResults} />
    </>
  );
}

export default App;
