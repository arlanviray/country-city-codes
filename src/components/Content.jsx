import PropTypes from "prop-types";
import Table from "./Table";

Content.propTypes = {
  searchResults: PropTypes.array,
};

export default function Content({ searchResults }) {
  const results = searchResults.map((data, index) => (
    <Table key={index} data={data} />
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
    </>
  );
}
