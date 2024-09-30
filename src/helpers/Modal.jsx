/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useImperativeHandle } from "react";
import "./modal.scss";
import Flag from "../components/Flag";

const Modal = (props, ref) => {
  const { data } = props;

  const nowDate = new Date();
  const formatter = new Intl.DateTimeFormat([], {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: data.timezone,
  });
  const formattedDate = formatter.format(nowDate);

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
          {data.iso2 && <Flag code={data.iso2} />}
          {data.country}
        </div>
        <div className="modal-body">
          <p>
            <strong>City:</strong> {data.city}
            <span>({data.code})</span>
          </p>

          {data.currency_name && (
            <p>
              <strong>Currency:</strong> {data.currency_name}
              <span>({data.currency_code})</span>
            </p>
          )}

          {data.languages && (
            <p>
              <strong>Languages:</strong>{" "}
              {data.languages.map((language) => `${language}, `)}
            </p>
          )}

          {data.timezone && (
            <p className="timezone">
              <strong>Timezone:</strong> {formattedDate}
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
