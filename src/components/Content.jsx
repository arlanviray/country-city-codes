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

  const handleShowModal = (data) => {
    modalRef.current.handleOpenModal();
    setModalData(data);
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

      {createPortal(<Modal ref={modalRef} data={modalData} />, document.body)}
    </>
  );
}
