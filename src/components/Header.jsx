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
      ({ Country, CountryAlpha3, City, Code }) =>
        String(Country).toLocaleLowerCase().includes(targetValue) ||
        String(CountryAlpha3).toLocaleLowerCase().includes(targetValue) ||
        String(City).toLocaleLowerCase().includes(targetValue) ||
        String(Code).toLocaleLowerCase().includes(targetValue)
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
