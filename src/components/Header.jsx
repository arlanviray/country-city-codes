import PropTypes from "prop-types";

Header.propTypes = {
  initCities: PropTypes.array,
  setSearchResults: PropTypes.func,
};

export default function Header({ initCities, setSearchResults }) {
  function handleChange(e) {
    if (!e.target.value) return setSearchResults(initCities);

    const resultsArray = initCities.filter(
      ({ Country, CountryAlpha3, City, Code }) =>
        String(Country).toLocaleLowerCase().includes(e.target.value) ||
        String(CountryAlpha3).toLocaleLowerCase().includes(e.target.value) ||
        String(City).toLocaleLowerCase().includes(e.target.value) ||
        String(Code).toLocaleLowerCase().includes(e.target.value)
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
