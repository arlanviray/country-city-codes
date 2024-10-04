import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Modal from "../helpers/Modal";
import Table from "./Table";

Content.propTypes = {
  searchResults: PropTypes.array,
};

export default function Content({ searchResults }) {
  const modalRef = useRef();
  const [modalData, setModalData] = useState({});
  const [modalTimezone, setModalTimezone] = useState("");
  const [modalWeather, setModalWeather] = useState({});

  const handleShowModal = (data) => {
    modalRef.current.handleOpenModal();
    setModalData(data);

    // timezone: date and time
    const nowDate = new Date();
    const formatter = new Intl.DateTimeFormat([], {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: data.timezone,
    });
    setModalTimezone(formatter.format(nowDate));

    // weather: temperature, description, icon
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lng}&units=metric&appid=c5baa00af2bfbc51b5a8bff68a069bb0`;
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
        setModalWeather({
          temp: `${data.main.temp}°C`,
          main: data.weather[0].main,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setModalWeather({});
      });
  };

  const results = searchResults.map((data, index) => (
    <Table key={index} data={data} handleShowModal={handleShowModal} />
  ));

  return (
    <>
      <main>
        <div className="table-container">
          {results?.length ? (
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>City</th>
                  <th>Code</th>
                  <th>Stats</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{results}</tbody>
            </table>
          ) : (
            <p className="no-results">Ooops! No matching results...</p>
          )}
        </div>
      </main>

      {createPortal(
        <Modal
          ref={modalRef}
          data={modalData}
          timezone={modalTimezone}
          weather={modalWeather}
        />,
        document.body
      )}
    </>
  );
}
