import PropTypes from "prop-types";
import Flag from "./Flag";

Table.propTypes = {
  data: PropTypes.object,
};

export default function Table({
  data: { Country, CountryAlpha2, CountryAlpha3, City, Code, KouniTumlareCode },
}) {
  const mapUrl = String(`${City}+${Country}`)
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll(" ", "+");

  return (
    <tr>
      <td>
        {Country}
        <div>
          <span>{CountryAlpha2 && <Flag code={CountryAlpha2} />}</span>
          <span className="roboto-light">{CountryAlpha3 && CountryAlpha3}</span>
        </div>
      </td>
      <td>{City}</td>
      <td>
        {Code}
        {KouniTumlareCode && (
          <strong>
            <br />
            {KouniTumlareCode} (Kouni Tumlare code)
          </strong>
        )}
      </td>
      <td>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapUrl}`}
          target="_blank"
        >
          Google Map
        </a>
      </td>
    </tr>
  );
}
