/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useImperativeHandle } from "react";
import "./modal.scss";
import Flag from "../components/Flag";

const Modal = (props, ref) => {
  const { data, timezone, weather } = props;

  useImperativeHandle(ref, () => ({
    handleOpenModal() {
      document.querySelector("dialog[data-modal]").showModal();
    },
  }));

  const handleClose = () => {
    document.querySelector("dialog[data-modal]").close();
  };

  return (
    <dialog data-modal>
      <div className="modal-container">
        <div className="modal-title">
          {data.country && (
            <>
              <Flag code={data.iso2} />
              {data.country}
              <p>{data.iso3}</p>
            </>
          )}
        </div>
        <div className="modal-body">
          {data.city && (
            <p>
              <strong>City:</strong> {data.city}
              <span>({data.code})</span>
            </p>
          )}

          {data.currency_name && (
            <p>
              <strong>Currency:</strong> {data.currency_name}
              <span>({data.currency_code})</span>
            </p>
          )}

          {data.languages && (
            <p>
              <strong>Languages:</strong>{" "}
              {data.languages.map(
                (language, i) =>
                  language + (i + 1 < data.languages.length ? ", " : ".")
              )}
            </p>
          )}

          {timezone && (
            <p className="timezone">
              <strong>Timezone:</strong> {timezone}
            </p>
          )}

          {weather.temp ? (
            <div className="weather">
              <img
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              />
              <div>
                <strong>{weather.temp}</strong>
                <br />
                <span>{weather.desc}</span>
              </div>
            </div>
          ) : (
            <p>
              <span>Currently no available weather stat for this city!</span>
            </p>
          )}
        </div>
        <button data-close-modal onClick={handleClose}>
          X
        </button>
      </div>
    </dialog>
  );
};

export default forwardRef(Modal);
