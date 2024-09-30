import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import CITY_CODES from "./data-city-codes";
import COUNTRY_CODES from "./data-country-codes";
import COUNTRY_TIMEZONE from "./data-country-timezone";
import COUNTRY_CURRENCY_NAME from "./data-country-currency-name";
import COUNTRY_CURRENCY_CODE from "./data-country-currency-code";
import COUNTRY_LANGUAGES from "./data-country-languages";

// add data to City Codes
// - iso2 (flags), iso3 (country short code)
// - utc, timezone
// - curreny name and code
// - languages
CITY_CODES.map((city) => {
  const countryCodes = COUNTRY_CODES.find(
    (country) => country.country === city.country
  );
  city["iso2"] = countryCodes ? countryCodes.iso2 : undefined;
  city["iso3"] = countryCodes ? countryCodes.iso3 : undefined;

  const countryTimezone = COUNTRY_TIMEZONE.find(
    (country) =>
      country.country === city.country &&
      country.major_cities.includes(city.city)
  );
  city["utc"] = countryTimezone ? countryTimezone.utc : undefined;
  city["timezone"] = countryTimezone ? countryTimezone.timezone : undefined;

  const countryCurrencyName = COUNTRY_CURRENCY_NAME.find(
    (country) => country.country === city.country
  );
  city["currency_name"] = countryCurrencyName
    ? countryCurrencyName.currency_name
    : undefined;

  const countryCurrencyCode = COUNTRY_CURRENCY_CODE.find(
    (country) => country.country === city.country
  );
  city["currency_code"] = countryCurrencyCode
    ? countryCurrencyCode.currency_code
    : undefined;

  const countryLanguages = COUNTRY_LANGUAGES.find(
    (country) => country.country === city.country
  );
  city["languages"] = countryLanguages ? countryLanguages.languages : undefined;
});

function App() {
  const [searchResults, setSearchResults] = useState(CITY_CODES);
  // console.log(searchResults);

  return (
    <>
      <Header initCities={CITY_CODES} setSearchResults={setSearchResults} />
      <Content searchResults={searchResults} />
    </>
  );
}

export default App;
