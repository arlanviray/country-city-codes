import PropTypes from "prop-types";

Header.propTypes = {
  initCities: PropTypes.array,
  setSearchResults: PropTypes.func,
};

export default function Header({ initCities, setSearchResults }) {
  function handleChange(e) {
    // set field value to lowercase
    const targetValue = e.target.value.toLocaleLowerCase();

    if (!targetValue) return setSearchResults(initCities);

    const resultsArray = initCities.filter(
      ({ country, iso3, city, code, kouni_tumlare_code }) =>
        String(country).toLocaleLowerCase().includes(targetValue) ||
        String(iso3).toLocaleLowerCase().includes(targetValue) ||
        String(city).toLocaleLowerCase().includes(targetValue) ||
        String(code).toLocaleLowerCase().includes(targetValue) ||
        String(kouni_tumlare_code).toLocaleLowerCase().includes(targetValue)
    );

    setSearchResults(resultsArray);
  }

  return (
    <header>
      <div className="field">
        <input type="text" placeholder="Enter search" onChange={handleChange} />
        <span className="material-symbols-outlined">search</span>
      </div>
    </header>
  );
}
