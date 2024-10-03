import PropTypes from "prop-types";
import Flag from "./Flag";

Table.propTypes = {
  data: PropTypes.object,
  handleShowModal: PropTypes.func,
};

export default function Table({ data, handleShowModal }) {
  const { id, country, iso2, city, code, kouni_tumlare_code } = data;

  const mapUrl = String(`${city}+${country}`)
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll(" ", "+");

  return (
    <tr>
      <td>
        {iso2 && <Flag code={iso2} />}
        {country}
      </td>
      <td>
        {city}
        {/* <div>
          lat: {data.lat}, lng: {data.lng}
        </div> */}
      </td>
      <td>
        {code}
        {kouni_tumlare_code && (
          <strong style={{ color: "red" }}>
            <br />
            {kouni_tumlare_code} (Kouni)
          </strong>
        )}
      </td>
      <td>
        <button onClick={() => handleShowModal(data)}>View {id}</button>
      </td>
      <td>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapUrl}`}
          target="_blank"
        >
          Map
        </a>
      </td>
    </tr>
  );
}
